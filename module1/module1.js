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
