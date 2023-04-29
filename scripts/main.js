const game = new TicTacToe();
const cells = document.querySelectorAll('[data-cell]');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    if (game.isEmpty(row, col)) {
      cell.textContent = game.currentPlayer;
      game.play(row, col);
      if (game.isGameOver()) {
        alert(game.winner ? `Player \${game.winner} wins!` : 'Tie game!');
      }
    }
  });
});
