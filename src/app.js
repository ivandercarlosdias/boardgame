class BoardGame {
   constructor(boardSize = 6) {
      this.boardSize = boardSize
   }

   getBoardCellClasses(index) {
      // adicionar classes na célula conforme posições e objetivos dos players
      return `class-${index}`
   }
}

document.addEventListener('alpine:init', () => {
   Alpine.data('app', () => new BoardGame())
})
