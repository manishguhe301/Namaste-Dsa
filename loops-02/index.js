// * P1 => Write a function that searches the element in
// * the array and returns the index of that element if not found return -1.

let numToFind = 10;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findElem(num, a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === num) return i
  }
  return -1;
}

let findIndex = findElem(numToFind, arr);
console.log(findIndex);