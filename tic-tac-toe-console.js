// const readline = require('readline');
//
// class TicTacToe {
//   constructor() {
//     this._board = [
//       ['-', '-','-'],
//       ['-', '-','-'],
//       ['-', '-','-'],
//     ];
//     this._currentPlayer = 'X';
//   }
//
//   checkValid(x, y) {
//     if(this._board[x][y] === '-') {
//       return true;
//     }
//     return false;
//   }
//
//   turn(rl) {
//
//     rl.question('Where do you want to move?', answer => {
//       let x = answer[0];
//       let y = answer[1];
//       if(this.checkValid(x,y)) {
//         this.printBoard()
//         this._board[x][y] = 'X'
//         this.printBoard()
//         if(this.isBoardFull()) {
//           console.log("BOARD IS FULL");
//           rl.close();
//         }
//
//         this.simpleAI(rl);
//       } else {
//         console.log("ERROR: You need to give me a valid input");
//         this.turn(rl);
//       }
//
//
//       // Check if place is filled --> Retry
//       // if(checkAvailable(answer))
//       //
//     })
//   }
//
//
//   start() {
//       const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdoutp
//       })
//
//       this.printBoard();
//       this.turn(rl);
//   }
//
//   addToken(x, y, token) {
//     if(this._board[x][y] == '-') {
//       this._board[x][y] = token
//     } else {
//       console.log('ERROR: Already placed')
//     }
//   }
//
//   printBoard() {
//     var i = 0;
//     for(let i = 0; i < this._board.length; i++) {
//       let row = this._board[i];
//       let output = row[0];
//       console.log(row.join('|'))
//     }
//     console
//   }
//
//   isBoardFull() {
//     for(var i = 0; i < this._board.length; i++) {
//       let row = this._board[i];
//       for(var j = 0; j<  row.length; j++) {
//         if(row[j] === '-') {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
//
//   simpleAI(rl) {
//     try {
//       if(this.isBoardFull()) {
//         throw new Error('ERROR: Cannot place a token');
//       } else {
//         let coord = this.findSpot();
//         this._board[coord[0]][coord[1]] = 'O'
//         this.printBoard();
//         this.turn(rl);
//       }
//     } catch(err) {
//       throw err;
//     }
//
//   }
//
//   findSpot() {
//     for(let i = 0; i < this._board.length; i++) {
//       let row = this._board[i];
//       for( var j = 0; j < row.length; j++) {
//         if(row[j] === '-') {
//           return [i, j]
//         }
//       }
//     }
//   }
// }
//
//
// let game = new TicTacToe();
// // game.printBoard();
// // game.addToken(0, 1, 'X');
// // game.printBoard();
// // console.log(game.isBoardFull());
// // game.simpleAI();
// // game.printBoard();
// // game.simpleAI();
// // game.printBoard();
// // for(var i = 0 ; i < 10; i ++) {
// //   game.simpleAI();
// //   game.printBoard();
// // }
// game.start();

const readline = require('readline');
let letter = {'A':0, 'B':1,'C':2}
let winningMoves =[["00", "01", "02"],
["10", "11", "12"],
["20", "21", "22"],
["00", "11", "22"],
["02", "11", "20"]];

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

function checkWinner(moves) {
  for(var i = 0; i < winningMoves.length;i++) {
    const winningCoords = winningMoves[i];
    const first = winningCoords[0];
    const second = winningCoords[1];
    const third = winningCoords[2];

    if(moves[first[0]][first[1]] !== ' ' && moves[first[0]][first[1]] === moves[second[0]][second[1]] && moves[first[0]][first[1]] === moves[third[0]][third[1]]) {
      return true;
    }
  }
  return false;
}

function checkValidMove(moves, x, y) {
  if(moves[x][y] !== ' ') {
    return true
  } else {
    return false;
  }
}

function getMove(rl, currentPlayer, moves, numberOfMoves) {
  rl.question('It is ' + currentPlayer + "'s turn: ", (answer) => {
    let x = answer[1];
    let y = letter[answer[0]];

    if (checkValidMove(moves, x, y)) {
      board(moves);
      console.log('Invalid: ' + answer + ' is already taken.')
      getMove(rl, currentPlayer, moves, numberOfMoves)
    } else {
      moves[x][y] = currentPlayer;
      board(moves);
      if(checkWinner(moves)) {
        console.log(currentPlayer + ' is the WINNER!!!')
        rl.close();
      } else if(numberOfMoves === 9) {
        console.log('Tie!')
        rl.close();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        numberOfMoves = numberOfMoves + 1;
        getMove(rl, currentPlayer, moves, numberOfMoves++)
      }
    }
  });
}

function main() {
    let moves = [];

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

    getMove(rl, currentPlayer, moves, 0)
}

main();
