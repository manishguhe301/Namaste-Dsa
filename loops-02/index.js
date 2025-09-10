// * P1 => Write a function that searches the element in
// * the array and returns the index of that element if not found return -1.

let numToFind = 10;
let arr = [1, 2, -3, 4, 5, -6, 7, 8, 9, -10, -1, 0];

function findElem(num, a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === num) return i;
  }
  return -1;
}

let findIndex = findElem(numToFind, arr);
console.log("P1: Index of " + numToFind + " is " + findIndex);

// * P2 => Write a function that returns the no of negative
// * numbers in an array

function countNegatives(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) count++
  }
  return count
}

const countNoOfNegatives = countNegatives(arr)
console.log("P2: No of negative numbers are " + countNoOfNegatives);

// * P3 =>
// * P4 => 
