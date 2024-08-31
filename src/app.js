class BoardGame {
   constructor(boardSize = 6) {
      this.boardSize = boardSize

      this.players = [
         {
            name: 'Jogador 1',
            position: 0,
            targetPosition: boardSize - 1,
         },
         {
            name: 'Jogador 2',
            position: boardSize * boardSize - 1,
            targetPosition: boardSize * (boardSize - 1),
         },
      ]
   }

   handleBoardCellClasses(index) {
      let classes = ''

      this.players.forEach((player, i) => {
         if (index === player.position) {
            classes += ` player-${i + 1}`
         } else if (index === player.targetPosition) {
            classes += ` player-${i + 1}-target`
         }
      })

      return classes
   }

   movePlayer(playerIndex, direction) {
      const currentPlayer = this.players[playerIndex]
      const newPosition = this.getPlayerNewPosition(currentPlayer.position, direction)

      if (newPosition === false) {
         console.error('Movimento inválido.')
         return
      }

      if (this.isPlayerInPosition(playerIndex, newPosition)) {
         console.error('Movimento não é possível. A posição está ocupada por outro jogador.')
         return
      }

      currentPlayer.position = newPosition

      if (newPosition === currentPlayer.targetPosition) {
         this.setWinner(currentPlayer)
      }
   }

   isPlayerInPosition(playerIndex, newPosition) {
      return this.players.some((player, index) => index !== playerIndex && player.position === newPosition)
   }

   getPlayerNewPosition(currentPosition, direction) {
      const size = this.boardSize

      const directions = {
         up: currentPosition >= size ? currentPosition - size : false,
         down: currentPosition < size * (size - 1) ? currentPosition + size : false,
         left: currentPosition % size !== 0 ? currentPosition - 1 : false,
         right: currentPosition % size !== size - 1 ? currentPosition + 1 : false,
      }

      return directions[direction] ?? false
   }

   setWinner(player) {
      console.warn(`${player.name} venceu o jogo! 🎊`)
   }
}

document.addEventListener('alpine:init', () => {
   Alpine.data('app', () => new BoardGame())
})
