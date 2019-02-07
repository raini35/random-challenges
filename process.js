var child_process = require('child_process');
var fs = require('fs')
var numchild  = require('os').cpus().length;

console.log(numchild);
var output = [];

var i;
var count = 0;

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('de_cc_data.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  count = count + 1;
  // console.log(count + ": " + line)
});

rl.on('close', function() {
  console.log(count)
});

  // var splitstream = fs.createReadStream('de_cc_data.txt').pipe(split())
// require('fs').createReadStream(process.argv[2])
//   .on('data', function(chunk) {
//     chunk = chunk.toString('utf8').split('\n')
//     for (i=0; i < chunk.length; ++i){
//       count++;
//       output.push(chunk[i])
//     }
//   })
//   .on('end', function() {
//     console.log(count);
//   });

// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('de_cc_data.txt')
// });
//
// lineReader.on('line', function (line) {
//   output.push(line);
// });

// var fs = require('fs')
// var es = require('event-stream');
//
// var lineNr = 0;
//
// var s = fs.createReadStream('de_cc_data.txt')
//     .pipe(es.split())
//     .pipe(es.mapSync(function(line){
//
//         // pause the readstream
//         s.pause();
//
//         lineNr += 1;
//
//         // process line here and call s.resume() when rdy
//         // function below was for logging memory usage
//         logMemoryUsage(lineNr);
//
//         // resume the readstream, possibly from a callback
//         s.resume();
//     })
//     .on('error', function(err){
//         console.log('Error while reading file.', err);
//     })
//     .on('end', function(){
//         console.log('Read entire file.')
//         console.log(lineNr)
//     })
// );

  //
  //
  //
  // // parent.js
  // var child_process = require('child_process');
  // var output = [];
  // var numchild  = require('os').cpus().length;
  // var done      = 0;
  //
  // for (var i = 0; i < numchild; i++){
  //   var child = child_process.fork('./child');
  //   child.send((i + 1) * 1000);
  //   child.on('message', function(message) {
  //     console.log('[parent] received message from child:', message);
  //     output.push(message.result);
  //     done++;
  //     if (done === numchild) {
  //       console.log('[parent] received all results');
  //       console.log(output);
  //     }
  //   });
  // }
