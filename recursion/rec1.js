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


let a = [1, 2, 3, 4, 5]
function sumOfElements(n) {
  if (n === 0) return a[0]
  return a[n] + sumOfElements(n - 1)
}

console.log(sumOfElements(a.length - 1));