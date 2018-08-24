var gameBoard = [
    [null, null, null], //[0][0],[0][1]
    [null, null, null], //[1][0],[1][1]
    [null, null, null] //[2][0],[2][1]
];

var isPlayer1 = false; //set isPlayer1 to false

function clicked(row, col) {
    console.log('asd');
    if (gameBoard[row][col] == null && checkWin() == false) {
        if (isPlayer1) {
            document.getElementById('box' + (row * 3 + col + 1)).textContent = 'O';
            isPlayer1 = !isPlayer1;
            gameBoard[row][col] = 'O';
            // console.log(win);
        } else {
            document.getElementById('box' + (row * 3 + col + 1)).textContent = 'X';
            isPlayer1 = !isPlayer1;
            gameBoard[row][col] = 'X';
        }
        if (checkWin() || checkBoardFull()) {
            document.getElementById('gameOn').onafterprint = 'Game Over!';
        }
    }
}

//check if a player has won
// var win = checkWin();
function checkWin() {
    //8 cases of winning:
    // win-1: row 0
    if (gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][1] == gameBoard[0][2] && gameBoard[0][1] != null) {
        if (gameBoard[0][1] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-2: row 1
    else if (gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[1][2] && gameBoard[1][1] != null) {
        if (gameBoard[1][1] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-3: row 2
    else if (gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][1] == gameBoard[2][2] && gameBoard[2][1] != null) {
        if (gameBoard[2][1] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-4 col 0
    else if (gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][1] == gameBoard[0][2] && gameBoard[0][1] != null) {
        if (gameBoard[0][1] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-5 col 1
    else if (gameBoard[0][1] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][1] && gameBoard[1][1] != null) {
        if (gameBoard[1][1] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-6 col 2
    else if (gameBoard[0][2] == gameBoard[1][2] && gameBoard[1][2] == gameBoard[2][2] && gameBoard[1][2] != null) {
        if (gameBoard[1][2] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-7 diag top left down
    else if (gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[1][1] != null) {
        if (gameBoard[0][0] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    }
    //win-8 diag top right down
    else if (gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0] && gameBoard[1][1] != null) {
        if (gameBoard[0][2] == 'X') {
            console.log("Player 1 won!");
        } else {
            console.log("Player 2 won!");
        }
        return true;
    } else {
        console.log("No winner.");
    }
    return false;
}

//var full = checkBoardFull;
// var full = checkBoardFull();

function checkBoardFull() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gameBoard[i][j] == null);
            return true;
        }
    }
    return false;
}


console.log("2345");



//
// console.log(items[0][0]);
// console.log(items);
