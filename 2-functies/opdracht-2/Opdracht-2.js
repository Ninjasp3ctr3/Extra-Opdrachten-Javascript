function isEven(getal) {
  let result = 0;
  result = getal % 2;
  if (result == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 4 even : " + isEven(4));
console.log("Is 5 even : " + isEven(5));
