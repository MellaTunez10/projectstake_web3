//FLATTENING
let arrays = [[1,2,3], [4,5], [6]];

let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);

// YOUR OWN LOOP

function loop(value, test, update, body) {
  for(let currentValue = value; test(currentValue); currentValue = update(currentValue)) {
    body(currentValue);
  }
}

loop(3, n => 0, n => n - 1, console.log)

//EVERYTHING
//LOOP METHOD
function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

//SAME METHOD
function every(array, test) {
  return !array.some(element => !test(element));
}

//DOMINANT WRITING DIRECTION

function dominantDirection(text) {
  let scripts = countBy (text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "no";
  });

  return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}




