const readline = require('readline');

function board(moves) {
  console.log( "     A   B   C ");
  console.log( "    --- --- ---");
  for(var i = 0; i < moves.length; i++) {
    let row = i + " ";
    for(var j = 0; j < moves[i].length; j++) {
      row = row + " | " + moves[i][j];
    }
    console.log(row + " | ");
    console.log( "    --- --- ---");

  }
}

function checkMovesForWinner(moves) {

  return true;
}

function getMove(currentPlayer) {

}
function answerIsCorrect(answer) {
  return answer[0] == 'A' && answer[1] == '0';
}
function main() {
    let moves = [];
    let letter = {'A':0, 'B':1,'C':2}
    for(var i = 0; i < 3; i++) {
      moves[i] = [];
      for(var j = 0; j < 3; j++) {
        moves[i][j] = ' '
      }
    }

    let openMoves = 9;
    board(moves);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let currentPlayer = 'X'


    let noWinner = true
    while(noWinner) {
      rl.question('It is ' + currentPlayer + "'s turn: ", (answer) => {

        // while(!answerIsCorrect(answer)) {
        //   console.log('Input is not correct');
        //   rl.question('It is ' + currentPlayer + "'s turn: ", (newAnswer) => {
        //     answer = newAnswer;
        //   });
        // }
        let x = letter[answer[0]];
        let y = answer[1];

        moves[x][y] = currentPlayer;
        board(moves);
        rl.close();
      });
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      // noWinner = checkMoves(moves);
    }
    // console.log(moves)
}

main();
