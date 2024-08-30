class BoardGame {
   constructor() {
      console.log('Init BoardGame')
   }
}

document.addEventListener('alpine:init', () => {
   Alpine.data('app', () => new BoardGame())
})
