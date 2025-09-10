// Problem Statement:
// Write a program to print all even numbers from an array.

// Example:
// Input: [10, 3, 5, 2, 7, 6, 9]

// Output: 10 2 6


let a = [10, 3, 5, 2, 7, 6, 9];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    console.log(a[i]);
  }
}