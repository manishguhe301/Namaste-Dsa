// Problem Statement:
// Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.

function calculateSum(a, b) {
  console.log(a + b);
}

calculateSum(10, 20);

// Problem Statement:
// Write a function that takes an integer and returns its square.Call this function and prints the result.Square(x) is a function that computes the square of a number.It returns the result instead of printing it.

function square(a) {
  return a * a
}

const sqOf4 = square(4)

console.log(sqOf4);

// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more

function checkEligibility(age) {
  if (age >= 18) return true
  return false
}

const isEligible = checkEligibility(11)

console.log(isEligible ? "Eligible" : "Not Eligible");

// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

function checkEven(num) {
  if (num % 2 === 0) return true;
  return false
}

const isEven = checkEven(18)

console.log(isEven ? "Even" : "Odd");