function telOp(getallen) {
  return getallen.reduce((total, current) => total + current, 0);
}

const testArray = [5, 10, 15];
const result = telOp(testArray);
console.log(result);
