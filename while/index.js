// * P1 =>  Write a function to return the no of digits of a number
// * e.g. 123 => 3


function countDigits(n) {
  if (n === 0) return 1;

  n = Math.abs(n)
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10)
  }
  return count
}

console.log("countDigits(123) => ", countDigits(123));