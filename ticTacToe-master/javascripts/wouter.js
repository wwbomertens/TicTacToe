// JavaScript source code


// maak class aan van de game
var myGame = {

    mtxBoard: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    iPlayer: 1,
    bGameOn: true,
    checkGameOver: function () {
        var mtxArray;
        // Check of er horizontaal drie dezelfde zijn
        for (i = 0; i < 3; i++) {
            // horizontaal
            mtxArray = this.mtxBoard[i];
            if (checkEqualArray(mtxArray)) {this.bGameOn=false}
            // verticaal
            mtxArray = [this.mtxBoard[0][i], this.mtxBoard[1][i], this.mtxBoard[2][i]]
            if (checkEqualArray(mtxArray)) { this.bGameOn = false }
        }
        // Check schuin
            mtxArray = [this.mtxBoard[0][0], this.mtxBoard[1][1], this.mtxBoard[2][2]]
            if (checkEqualArray(mtxArray)) { this.bGameOn = false }
            //eerste array 
           mtxArray = [this.mtxBoard[0][2], this.mtxBoard[1][1], this.mtxBoard[0][2]]
            if (checkEqualArray(mtxArray)) { this.bGameOn = false } 
    },
    drawboard: function () {
        var i;
        var j;
        var x;
        for (i = 0; i < this.mtxBoard.length; i++) {
            for (j = 0; j < this.mtxBoard[i].length;j++) {
                x = getElementTable(j + 1, i + 1);
                if (this.mtxBoard[i][j] == 1) { x.innerHTML = "<img src='images/cross.png'>" }
                else if (this.mtxBoard[i][j] == 2)  { x.innerHTML = "<img src='images/dot.png'>" }
            }
        }
    },
    clearboard: function () {
        var i;
        var j;
        var x;
        for (i = 0; i < this.mtxBoard.length; i++) {
            for (j = 0; j < this.mtxBoard[i].length; j++) {
                x = getElementTable(j + 1, i + 1);
                x.innerHTML = ""; 
            }
        }
    }
}

function newGame() {
    // Nieuw 
    myGame.mtxBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    myGame.iPlayer= 1;
    myGame.bGameOn = true;
    // ga nu het bord tekenen 
    myGame.clearboard();
    document.querySelector("#winner").innerHTML = "";

}


window.onload = function () {
    const cells = document.getElementsByTagName("th");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (e) {
            
            const colIndex = this.cellIndex;
            const rowIndex = this.parentNode.rowIndex;
            // Enkel als spel bezig is
            if (myGame.bGameOn) {

                //check of de bord 0 is
                if (myGame.mtxBoard[colIndex][rowIndex] == 0) {
                    // Voeg de combi toe
                    myGame.mtxBoard[colIndex][rowIndex] = myGame.iPlayer;
                    // ga nu het bord tekenen 
                    myGame.drawboard();
                    // Bepaal het spel
                    myGame.checkGameOver();

                    //Check nu het spel
                    if (!myGame.bGameOn) {
                        document.querySelector("#winner").innerHTML = "Game over. Winner is player " + myGame.iPlayer +"Click for new game";
                    }
                    // wissel de speler
                    if (myGame.iPlayer == 1) { myGame.iPlayer = 2 }
                    else { myGame.iPlayer = 1 }
                }
            }
        });
    }
}

function getElementTable(xPos, yPos) {

    return document.querySelector("body > section > table > tbody > tr:nth-child(" + xPos +") > th:nth-child("+yPos+")")
}


function checkEqualArray(mtxArray) {

    var i;
    var vValue = mtxArray[0];
    var bWin = true;

    if (vValue != 0) {

        for (i = 0; i < mtxArray.length; i++) {

            if (vValue != mtxArray[i]) {
                bWin = false;
            }

        }
    }
    else {bWin=false}
    return bWin;
}



