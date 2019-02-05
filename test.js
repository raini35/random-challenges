let height = 10;
let row = 10;

let board = []
let master = []
let numberOfBombs = 10;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addNumbers(master, x, y) {
  master[x + 1][ y] = master[x + 1][ y] !== '*' ? master[x + 1][ y] + 1 : '*';
  master[x - 1][ y] = master[x - 1][ y] !== '*' ? master[x - 1][ y] + 1 : '*';
  master[x - 1][ y - 1] = master[x - 1][ y - 1] !== '*' ? master[x - 1][ y - 1] + 1 : '*';
  master[x - 1][ y + 1] = master[x - 1][ y + 1] !== '*' ? master[x - 1][ y + 1] + 1 : '*';
  master[x + 1][ y + 1] = master[x + 1][ y + 1] !== '*' ? master[x + 1][ y + 1] + 1 : '*';
  master[x + 1][ y - 1] = master[x + 1][ y - 1] !== '*' ? master[x + 1][ y - 1] + 1 : '*';
  master[x][ y + 1] = master[x][ y + 1] !== '*' ? master[x][ y + 1] + 1 : '*';
  master[x][ y - 1] = master[x][ y - 1] !== '*' ? master[x][ y - 1] + 1 : '*';
}
function placeBombs(master) {
  while(numberOfBombs !== 0) {
    for(var i = 1; i < height; i++) {
      for(var j = 1; j < row; j++) {
        let x = getRandomInt(height - 1)
        if(numberOfBombs === 0) {
          return;
        }
        if(master[i][j] !== '*' && x === 1) {
          numberOfBombs--;
          console.log(numberOfBombs + ": " + x)
          master[i][j] = '*'
          addNumbers(master, i, j);
        }
      }
    }
  }
}

for(var i = 0; i < height; i++) {
  board.push(new Array(row).fill('?'));
  master.push(new Array(row + 2).fill(0));
}

master.push(new Array(row + 2).fill(0));
master.push(new Array(row + 2).fill(0));

placeBombs(master);

console.log(board);
console.log(master.length);
console.log(master[0].length);
