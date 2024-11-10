//MODULE 1 EXERCISES
// LOOPING A TRIANGLE

for (let i = 0; i < 8; i++){
  let row = "";
  for (let j = 0; j <= i; j++){
    row += "#";
 }
 console.log(row);
}


// FIZZBUZZ
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");    
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

//CHESSBOARD
  
for (i = 0; i < 8; i++){
  let r = "";
  for (j = 0; j < 8; j++){
    if ((i + j) % 2 == 0) {
      r += " ";
    } else {
      r += "#";
    }
  }
  console.log(r);
}

//MINIMUM

function min(x, y) {
  if (x < y) {
    return x;
  } else if (x > y) {
    return y;
  }
}

//RECURSION

function isEven(n) {
  
  n = Math.abs(n)
  if (n === 0) return true;
  if (n === 1) return false; 
  else return isEven(n - 2)
}


//countBs
function CountBs(string) {
  let count = 0;
  for (i = 0; i < string.length; i++){
    if (string[i] === "B") {
      count++
    }
  }
  return count;
}

// Modified Function to count uppercase B characters in a string using countChar
function countBs(string) {
    return countChar(string, 'B');
}

// Generalized function to count any character in a string
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}