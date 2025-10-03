let n = 10;

function printN(n) {
  if (n === 0) return;
  console.log(n);
  n--;
  printN(n)
}

printN(n)

let n1 = 10
function print1ToN(x) {
  if (x > n1) return;
  console.log(x);
  x++;
  print1ToN(x)
}

print1ToN(1)

function sumOfNnumbers(n) {
  if (n === 0) return 0;
  return n + sumOfNnumbers(n - 1)
}

console.log(sumOfNnumbers(5));