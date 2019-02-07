// let height = 10;
// let row = 10;
//
// let board = []
// let master = []
// let numberOfBombs = 10;
//
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// function addNumbers(master, x, y) {
//   master[x + 1][ y] = master[x + 1][ y] !== '*' ? master[x + 1][ y] + 1 : '*';
//   master[x - 1][ y] = master[x - 1][ y] !== '*' ? master[x - 1][ y] + 1 : '*';
//   master[x - 1][ y - 1] = master[x - 1][ y - 1] !== '*' ? master[x - 1][ y - 1] + 1 : '*';
//   master[x - 1][ y + 1] = master[x - 1][ y + 1] !== '*' ? master[x - 1][ y + 1] + 1 : '*';
//   master[x + 1][ y + 1] = master[x + 1][ y + 1] !== '*' ? master[x + 1][ y + 1] + 1 : '*';
//   master[x + 1][ y - 1] = master[x + 1][ y - 1] !== '*' ? master[x + 1][ y - 1] + 1 : '*';
//   master[x][ y + 1] = master[x][ y + 1] !== '*' ? master[x][ y + 1] + 1 : '*';
//   master[x][ y - 1] = master[x][ y - 1] !== '*' ? master[x][ y - 1] + 1 : '*';
// }
// function placeBombs(master) {
//   while(numberOfBombs !== 0) {
//     for(var i = 1; i < height; i++) {
//       for(var j = 1; j < row; j++) {
//         let x = getRandomInt(height - 1)
//         if(numberOfBombs === 0) {
//           return;
//         }
//         if(master[i][j] !== '*' && x === 1) {
//           numberOfBombs--;
//           console.log(numberOfBombs + ": " + x)
//           master[i][j] = '*'
//           addNumbers(master, i, j);
//         }
//       }
//     }
//   }
// }
//
// for(var i = 0; i < height; i++) {
//   board.push(new Array(row).fill('?'));
//   master.push(new Array(row + 2).fill(0));
// }
//
// master.push(new Array(row + 2).fill(0));
// master.push(new Array(row + 2).fill(0));
//
// placeBombs(master);
//
// console.log(board);
// console.log(master.length);
// console.log(master[0].length);
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var count = 0;

var countTracker = {};
var errors = [];

var instream = fs.createReadStream('./de_cc_data.txt');

var re = /"([A-Za-z]*)\s*,*\s*([A-Z]*).*"/;

var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  count = count + 1;
  let output = line.split(',')

  if(output.length > 5 || output.length < 5) {
    console.log("ERROR: " + line)
    var newLine = line.replace(re, '$1 $2');
    output = newLine.split(',')
    output[3] = output[3].trim();
  }

  if(countTracker[output[3]] !== undefined) {
    countTracker[output[3]][0] = countTracker[output[3]][0]+ parseFloat(output[4]);
    countTracker[output[3]][1] = countTracker[output[3]][1] + 1;
  } else {
    countTracker[output[3]] = [parseFloat(output[4]), 1];
  }

});

rl.on('close', function() {
  console.log(countTracker)
  let patient = 0;
  console.log(Object.keys(countTracker).length)
  console.log(count);
  for (let key in countTracker) {
    patient = countTracker[key][1] + patient
  }
  console.log(patient);
  console.log(Object.keys(countTracker).sort())
});
