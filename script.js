var gameBoard = [
    [null, null, null], //[0][0],[0][1]
    [null, null, null], //[1][0],[1][1]
    [null, null, null] //[2][0],[2][1]
];

var isPlayer1 = false; //set x returns false; false represents player1

function clicked(row,col) {

    if (gameBoard[row][col] == null) {
        // document.getElementById('box' + boxNum).style.backgroundColor = 'blue';
        if (isPlayer1) {
            document.getElementById('box' + (row*3+col+1)).textContent = 'O'
            isPlayer1 = !isPlayer1;
            gameBoard[row][col]= 'O'
        } else {
            document.getElementById('box' + (row*3+col+1)).textContent = 'X'
            isPlayer1 = !isPlayer1;
            gameBoard[row][col]= 'X'
        }
        // if (checkBoardFull() && checkWin()) {
        //     console.log("Game over");
        // }
    }
}

function checkWin() {
    return false;

}
funtion checkBoardFull() {
    return false;
}
//
// console.log(items[0][0]);
// console.log(items);
