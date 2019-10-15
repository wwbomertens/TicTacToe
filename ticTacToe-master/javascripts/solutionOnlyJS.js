window.onload = function() {
  const cells = document.getElementsByTagName("th");
  let currentPlayer = "cross";

  const gameField = [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]];

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(e) {
      const colIndex = this.cellIndex;
      const rowIndex = this.parentNode.rowIndex;

      gameField[rowIndex][colIndex] = currentPlayer;
      checkWinner(gameField, currentPlayer);
      if (currentPlayer == "cross") {
        this.innerHTML = "<img src='images/cross.png'>";
        currentPlayer = "dot";
      } else {
        this.innerHTML = "<img src='images/dot.png'>";
        currentPlayer = "cross";
      }
    });
  }

  function checkWinner() {
    for (let i = 0; i < gameField.length - 2; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        //Check horizontally
        if (
          gameField[j][i] === gameField[j][i + 1] &&
          gameField[j][i] === gameField[j][i + 2] &&
          gameField[j][i + 1] === gameField[j][i + 2]
        ) {
          showWinner();
          return;
        }
        //Check vertically
        if (
          gameField[i][j] === gameField[i + 1][j] &&
          gameField[i][j] === gameField[i + 2][j] &&
          gameField[i + 1][j] === gameField[i + 2][j]
        ) {
          showWinner();
          return;
        }
        //Check diagonally (left to right)
        if (
          gameField[0][0] === gameField[1][1] &&
          gameField[0][0] === gameField[2][2] &&
          gameField[1][1] === gameField[2][2]
        ) {
          showWinner();
          return;
        }
        //Check diagonally (right to left)
        if (
          gameField[0][2] === gameField[1][1] &&
          gameField[0][2] === gameField[2][0] &&
          gameField[1][1] === gameField[2][0]
        ) {
          showWinner();
          return;
        }
      }
    }
  }

  function showWinner() {
    document.getElementById("winner").innerText =
      "The winner is " + currentPlayer;
  }
};
