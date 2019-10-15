class Game {
  constructor(table) {
    this.currentPlayer = "cross";
    this.playingField = [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]];
    this.table = table;
  }
  nextPlayer() {
    //Switch player;
    this.currentPlayer = this.currentPlayer === "cross" ? "circle" : "cross";
  }

  madeMove(element) {
    //Element is the cell that was clicked on.
    //We need to know the column number and the row number of this element.
    //Col number is simple, it's given by the element.
    const colNr = element.cellIndex;
    // in the table property we have access to all the rows.
    // if we cast it to an array, we can use array methods.
    const allTableRows = [...this.table.rows];

    //if we get the current row (which is the direct parent of the clickedElement )
    const currentRowIndex = element.parentNode.rowIndex;
    //Here we set which player has clicked which cell
    this.playingField[rowNr][colNr] = this.currentPlayer;
    this.checkWinner();
    this.nextPlayer();
  }

  checkWinner() {
    for (let i = 0; i < this.playingField.length - 2; i++) {
      for (let j = 0; j < this.playingField[i].length; j++) {
        //Check horizontally
        if (
          this.playingField[j][i] === this.playingField[j][i + 1] &&
          this.playingField[j][i] === this.playingField[j][i + 2] &&
          this.playingField[j][i + 1] === this.playingField[j][i + 2]
        ) {
          this.showWinner();
          return;
        }
        //Check vertically
        if (
          this.playingField[i][j] === this.playingField[i + 1][j] &&
          this.playingField[i][j] === this.playingField[i + 2][j] &&
          this.playingField[i + 1][j] === this.playingField[i + 2][j]
        ) {
          this.showWinner();
          return;
        }
        //Check diagonally (left to right)
        if (
          this.playingField[0][0] === this.playingField[1][1] &&
          this.playingField[0][0] === this.playingField[2][2] &&
          this.playingField[1][1] === this.playingField[2][2]
        ) {
          this.showWinner();
          return;
        }
        //Check diagonally (right to left)
        if (
          this.playingField[0][2] === this.playingField[1][1] &&
          this.playingField[0][2] === this.playingField[2][0] &&
          this.playingField[1][1] === this.playingField[2][0]
        ) {
          this.showWinner();
          return;
        }
      }
    }
  }

  showWinner() {
    $("h2").html(`The winner is: ${this.currentPlayer}`);
  }
}

$(document).ready(function() {
  const table = $("table")[0];
  const game = new Game(table);
  $("th").click(function() {
    if (game.currentPlayer === "cross") {
      $(this).append(`
        <div class='cross'>
          <div></div>
          <div></div>
        </div>
    `);
    } else {
      $(this).append(`<div class='circle'></div>`);
    }
    $(this).off();
    game.madeMove(this);
  });
});
