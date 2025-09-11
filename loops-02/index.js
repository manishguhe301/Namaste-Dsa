// * P1 => Write a function that searches the element in
// * the array and returns the index of that element if not found return -1.

let numToFind = 10;
let arr = [1, 2, -3, 4, 5, -6, 7, -8, 9, -10, -1, 0];

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

// * P3 => Write a function that returns the largest number in an array

function largestElement(a) {
  let largest = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > largest) largest = a[i]
  }
  return largest
}

let largestNo = largestElement(arr)
console.log("P3: Largest number is " + largestNo);

// * P4 => Write a function that returns the smallest number in an array

function smallestElement(a) {
  let smallest = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < smallest) smallest = a[i]
  }
  return smallest
}

let smallestNo = smallestElement(arr)
console.log("P4: Smallest number is " + smallestNo);

// * P5 => Write a function that returns the second largest number in an array

const findSecondLargest = (a) => {

  if (a.length < 2) return null

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > firstLargest) {
      secondLargest = firstLargest
      firstLargest = a[i]
    } else if (a[i] > secondLargest && a[i] !== firstLargest) {
      secondLargest = a[i]
    }
  }

  return secondLargest === -Infinity ? null : secondLargest
}

console.log("P5: Second largest number is " + findSecondLargest([10, 20, 20]));

// * P6 => Write a function that returns the second smallest number in an array

const findSecondSmallest = (a) => {

  if (a.length < 2) return null

  let firstSmallest = Infinity;
  let secondSmallest = Infinity

  for (let i = 0; i < a.length; i++) {
    if (a[i] < firstSmallest) {
      secondSmallest = firstSmallest
      firstSmallest = a[i]
    } else if (a[i] < secondSmallest && a[i] !== firstSmallest) {
      secondSmallest = a[i]
    }
  }

  return secondSmallest === Infinity ? null : secondSmallest
}

console.log("P6: Second smallest number is " + findSecondSmallest([10, 20, 20, -1]));