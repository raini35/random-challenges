const input = [1,2,3,4,5]
const output = [];
function allSubsets(array) {
  var subset = new Array(array.length);
  helper(array, subset, 0);
  console.log(output);
}

function helper(array, subset, index) {
  if(index === array.length) {
    let temp =[];
    subset.forEach(x => {
      if(x !== null) {
        temp.push(x);
      }
    })
    output.push(temp);
  } else {
    subset[index] = null;
    helper(array, subset, index + 1);
    subset[index] = array[index];
    helper(array, subset, index + 1);
  }
}


allSubsets(input);
