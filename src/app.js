class BoardGame {
   constructor(boardSize = 6) {
      this.boardSize = boardSize
   }
}

document.addEventListener('alpine:init', () => {
   Alpine.data('app', () => new BoardGame())
})
