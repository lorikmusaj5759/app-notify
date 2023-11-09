/*
Filename: SophisticatedCode.js
Content: This code demonstrates a complex implementation of a tic-tac-toe game using advanced object-oriented programming concepts and algorithms.
*/

// Tic-Tac-Toe Game Class
class TicTacToe {
  constructor() {
    this.board = new Array(9).fill(null); // Empty game board
    this.currentPlayer = 'X'; // 'X' always starts
    this.isGameOver = false; // Track if the game is over
  }

  // Method to place a marker on the board
  placeMarker(position) {
    if (this.board[position] === null && !this.isGameOver) {
      this.board[position] = this.currentPlayer;

      if (this.checkWin(this.currentPlayer)) {
        console.log(`Player ${this.currentPlayer} wins!`);
        this.isGameOver = true;
      } else if (!this.board.includes(null)) {
        console.log("It's a draw!");
        this.isGameOver = true;
      }

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  // Method to check if a player has won the game
  checkWin(player) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winConditions.some(cond =>
      cond.every(pos => this.board[pos] === player)
    );
  }
}

// Example usage of the TicTacToe class
const game = new TicTacToe();

game.placeMarker(4); // X's turn
game.placeMarker(0); // O's turn
game.placeMarker(1); // X's turn
game.placeMarker(3); // O's turn
game.placeMarker(2); // X's turn

/*
... continue placing markers until the game ends ...
*/

game.placeMarker(7); // X's turn (last move)
game.placeMarker(8); // Result: Player X wins! (if winning move, otherwise draw)