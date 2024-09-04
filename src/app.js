// Init
document.addEventListener('alpine:init', () => {
   Alpine.data('app', () => new BoardGame())
})

class BoardGame {
   constructor() {
      this.boardSize = 6

      this.players = [
         {
            name: 'Jogador 1',
            position: 0,
            targetPosition: this.boardSize - 1,
         },
         {
            name: 'Jogador 2',
            position: this.boardSize * this.boardSize - 1,
            targetPosition: this.boardSize * (this.boardSize - 1),
         },
      ]

      this.boardWalls = {
         2: ['left'],
         4: ['left'],
         7: ['down', 'left'],
         9: ['down'],
         15: ['left'],
         17: ['down'],
         19: ['up', 'right'],
         21: ['left'],
         28: ['up', 'right'],
         31: ['left'],
      }
   }

   handleBoardCellClasses(index) {
      let classes = ''

      this.players.forEach((player, i) => {
         if (index === player.position) {
            classes += ` player--${i + 1}`
         }

         if (index === player.targetPosition) {
            classes += ` player-target--${i + 1}`
         }
      })

      if (this.boardWalls[index]) {
         this.boardWalls[index].forEach((direction) => {
            classes += ` board-wall--${direction}`
         })
      }

      return classes
   }

   movePlayer(playerIndex, direction) {
      const currentPlayer = this.players[playerIndex]
      const newPosition = this.getPlayerNewPosition(currentPlayer.position, direction)

      if (newPosition === false) {
         console.error('Movimento inválido.')
         return
      }

      if (
         this.hasWall(currentPlayer.position, direction) ||
         this.hasWall(newPosition, this.getReverseDiretion(direction))
      ) {
         console.error('Movimento bloqueado por um obstáculo.')
         return
      }

      if (this.hasPlayerInPosition(playerIndex, newPosition)) {
         console.error('Movimento não é possível. A posição está ocupada por outro jogador.')
         return
      }

      currentPlayer.position = newPosition

      if (newPosition === currentPlayer.targetPosition) {
         this.setWinner(currentPlayer)
      }
   }

   hasWall(position, direction) {
      const boardCellWalls = this.boardWalls[position] || []
      return boardCellWalls.includes(direction)
   }

   hasPlayerInPosition(playerIndex, newPosition) {
      return this.players.some((player, index) => index !== playerIndex && player.position === newPosition)
   }

   getPlayerNewPosition(position, direction) {
      const size = this.boardSize

      const newPositions = {
         up: position >= size ? position - size : false,
         down: position < size * (size - 1) ? position + size : false,
         left: position % size !== 0 ? position - 1 : false,
         right: position % size !== size - 1 ? position + 1 : false,
      }

      return newPositions[direction] ?? false
   }

   getReverseDiretion(direction) {
      const reverseDirections = {
         up: 'down',
         down: 'up',
         left: 'right',
         right: 'left',
      }

      return reverseDirections[direction]
   }

   setWinner(player) {
      console.warn(`${player.name} venceu o jogo! 🎊`)
   }
}
