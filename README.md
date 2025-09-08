# Namaste DSA 🚀

Welcome to my Data Structures and Algorithms learning journey! This repository contains daily learnings, implementations, and practice problems as I progress through the Namaste DSA course.

## 📚 Course Structure

```
Namaste DSA/
├── Topic 1/
│   ├── index.js
├── Topic 2/
│   ├── index.js
└── ... (more topics)
```

## 🛠️ Technology Stack

- **Programming Language**: JavaScript (Node.js)
- **Runtime**: Node.js v14+ recommended

## 🏃‍♂️ How to Run

1. Navigate to any topic folder:

   ```bash
   cd "Topic 1"
   ```

2. Run the JavaScript file:
   ```bash
   node index.js
   ```

## 📖 JavaScript Basics Reference

### Variables and Data Types

```javascript
// Variable declarations
let name = 'John'; // String (block-scoped, reassignable)
const age = 25; // Number (block-scoped, constant)
var isStudent = true; // Boolean (function-scoped, avoid in modern JS)

// Primitive data types
let str = 'Hello'; // String
let num = 42; // Number
let bool = true; // Boolean
let nothing = null; // Null (intentional absence)
let undefined_var; // Undefined (declared but not assigned)
let sym = Symbol('id'); // Symbol (unique identifier)
let bigNum = 123n; // BigInt (large integers)

// Non-primitive data types
let arr = [1, 2, 3]; // Array
let obj = { key: 'value' }; // Object
let func = function () {}; // Function
let date = new Date(); // Date object
let regex = /pattern/; // Regular Expression

// Type checking
typeof 42; // "number"
typeof 'hello'; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (known quirk)
typeof []; // "object"
Array.isArray([]); // true (proper array check)

// Type conversion
String(123); // "123"
Number('123'); // 123
Boolean(0); // false
parseInt('123.45'); // 123
parseFloat('123.45'); // 123.45
```

### Functions

```javascript
// Function declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const multiply = function (a, b) {
  return a * b;
};

// Arrow function (concise syntax)
const add = (a, b) => a + b;
const square = (x) => x * x; // Single parameter, no parentheses
const sayHello = () => 'Hello!'; // No parameters

// Function with default parameters
function greetWithDefault(name = 'World') {
  return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function as argument (Higher-order function)
function operate(a, b, operation) {
  return operation(a, b);
}
operate(5, 3, add); // 8

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('IIFE executed!');
})();

// Callback functions
function processData(data, callback) {
  const result = data.map((x) => x * 2);
  callback(result);
}

// Closures
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}
const addFive = outerFunction(5);
addFive(3); // 8
```

### Scope and Hoisting

```javascript
// Global scope
var globalVar = "I'm global";

function demonstrateScope() {
  // Function scope
  var functionScoped = 'Function scoped';

  if (true) {
    // Block scope
    let blockScoped = 'Block scoped';
    const alsoBlockScoped = 'Also block scoped';
    var functionScopedInBlock = 'Still function scoped';
  }

  // console.log(blockScoped); // ReferenceError
  console.log(functionScopedInBlock); // Works fine
}

// Hoisting examples
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'Now I have a value';

// console.log(notHoisted); // ReferenceError
let notHoisted = 'This throws error';

// Function hoisting
sayHello(); // Works fine
function sayHello() {
  console.log('Hello!');
}

// sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function () {
  console.log('Goodbye!');
};
```

### Conditional Statements

```javascript
// If-else statements
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}

// Ternary operator
const result = condition ? 'true value' : 'false value';

// Multiple ternary (chain)
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';

// Switch case
switch (variable) {
  case 1:
  case 2: // Multiple cases
    console.log('One or Two');
    break;
  case 3:
    console.log('Three');
    break;
  default:
    console.log('Other');
}

// Truthy and Falsy values
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy

// Short-circuit evaluation
const name = user.name || 'Anonymous'; // OR operator
user.isActive && user.sendEmail(); // AND operator

// Nullish coalescing operator (??)
const value = null ?? 'default'; // Only null/undefined, not other falsy values
```

### Loops

```javascript
// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Do-while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// For...of loop (values)
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}

// For...in loop (keys/indices)
for (const index in arr) {
  console.log(index, arr[index]);
}

// For...in with objects
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// Break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip iteration
  if (i === 7) break; // Exit loop
  console.log(i);
}

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i}, ${j}`);
  }
}

// Loop with labels (for breaking outer loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(`${i}, ${j}`);
  }
}
```

### Operators

#### Arithmetic Operators

```javascript
let a = 10,
  b = 3;

console.log(a + b); // 13 Addition
console.log(a - b); // 7  Subtraction
console.log(a * b); // 30 Multiplication
console.log(a / b); // 3.333... Division
console.log(a % b); // 1  Modulus (remainder)
console.log(a ** b); // 1000 Exponentiation

// Increment/Decrement
let x = 5;
console.log(x++); // 5 (post-increment)
console.log(++x); // 7 (pre-increment)
console.log(x--); // 7 (post-decrement)
console.log(--x); // 5 (pre-decrement)
```

#### Assignment Operators

```javascript
let x = 10;
x += 5; // x = x + 5  → 15
x -= 3; // x = x - 3  → 12
x *= 2; // x = x * 2  → 24
x /= 4; // x = x / 4  → 6
x %= 5; // x = x % 5  → 1
x **= 3; // x = x ** 3 → 1

// Logical assignment (ES2021)
x ||= 5; // x = x || 5 (assign if x is falsy)
x &&= 10; // x = x && 10 (assign if x is truthy)
x ??= 20; // x = x ?? 20 (assign if x is null/undefined)
```

#### Comparison Operators

```javascript
let a = 5,
  b = '5';

// Equality (type coercion)
console.log(a == b); // true (loose equality)
console.log(a != b); // false

// Strict equality (no type coercion)
console.log(a === b); // false (strict equality)
console.log(a !== b); // true

// Relational
console.log(a > 3); // true
console.log(a < 10); // true
console.log(a >= 5); // true
console.log(a <= 4); // false
```

#### Logical Operators

```javascript
let a = true,
  b = false;

console.log(a && b); // false (AND)
console.log(a || b); // true (OR)
console.log(!a); // false (NOT)

// Short-circuit evaluation
const result1 = false && someFunction(); // someFunction() not called
const result2 = true || someFunction(); // someFunction() not called
```

#### Bitwise Operators

```javascript
let a = 5; // 101 in binary
let b = 3; // 011 in binary

console.log(a & b); // 1 (AND)
console.log(a | b); // 7 (OR)
console.log(a ^ b); // 6 (XOR)
console.log(~a); // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2 (Right shift)
console.log(a >>> 1); // 2 (Unsigned right shift)
```

#### Other Operators

```javascript
// typeof operator
console.log(typeof 'hello'); // "string"

// instanceof operator
console.log([] instanceof Array); // true

// in operator
console.log('length' in [1, 2, 3]); // true

// delete operator
const obj = { a: 1, b: 2 };
delete obj.a; // removes property 'a'

// void operator
void 0; // returns undefined

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Destructuring assignment
const [first, second] = [1, 2, 3]; // first = 1, second = 2
const { name, age } = { name: 'John', age: 30 };
```

### Arrays (Complete Reference)

```javascript
// Array creation
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);
const arr4 = Array.from('hello'); // ['h','e','l','l','o']

// Multi-dimensional arrays
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Array properties
console.log(arr1.length); // 3

// Mutating methods (modify original array)
arr1.push(4); // Add to end → [1,2,3,4]
arr1.pop(); // Remove from end → [1,2,3]
arr1.unshift(0); // Add to beginning → [0,1,2,3]
arr1.shift(); // Remove from beginning → [1,2,3]
arr1.reverse(); // Reverse array → [3,2,1]
arr1.sort(); // Sort array → [1,2,3]
arr1.sort((a, b) => b - a); // Sort descending → [3,2,1]
arr1.splice(1, 1, 'a', 'b'); // Remove/add at index → [3,'a','b',1]
arr1.fill(0); // Fill with value → [0,0,0,0]

// Non-mutating methods (return new array/value)
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3); // [2, 3]
const joined = arr.join('-'); // "1-2-3-4-5"
const concatenated = arr.concat([6, 7]); // [1,2,3,4,5,6,7]

// Iteration methods
arr.forEach((item) => console.log(item));
const doubled = arr.map((x) => x * 2);
const evens = arr.filter((x) => x % 2 === 0);
const sum = arr.reduce((acc, curr) => acc + curr, 0);
const product = arr.reduceRight((acc, curr) => acc * curr, 1);

// Search methods
console.log(arr.indexOf(3)); // 2
console.log(arr.lastIndexOf(3)); // 2
console.log(arr.includes(4)); // true
console.log(arr.find((x) => x > 3)); // 4
console.log(arr.findIndex((x) => x > 3)); // 3

// Testing methods
console.log(arr.every((x) => x > 0)); // true (all elements pass test)
console.log(arr.some((x) => x > 4)); // true (at least one passes test)

// Advanced array methods
const nested = [[1, 2], [3, 4], [5]];
const flattened = nested.flat(); // [1, 2, 3, 4, 5]
const mapped = arr.flatMap((x) => [x, x * 2]); // [1,2,2,4,3,6,4,8,5,10]

// Array-like to Array conversion
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const realArray = Array.from(arrayLike); // ['a', 'b']

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Strings (Complete Reference)

```javascript
// String creation
const str1 = 'Hello World';
const str2 = 'Single quotes';
const str3 = `Template literal with ${str1}`;
const str4 = new String('String object');

// String properties
console.log(str1.length); // 11

// Character access
console.log(str1[0]); // "H"
console.log(str1.charAt(0)); // "H"
console.log(str1.charCodeAt(0)); // 72 (ASCII code)

// String search methods
console.log(str1.indexOf('o')); // 4 (first occurrence)
console.log(str1.lastIndexOf('o')); // 7 (last occurrence)
console.log(str1.search('World')); // 6 (regex-capable)
console.log(str1.includes('Hello')); // true
console.log(str1.startsWith('Hello')); // true
console.log(str1.endsWith('World')); // true

// String extraction
console.log(str1.slice(0, 5)); // "Hello"
console.log(str1.substring(6, 11)); // "World"
console.log(str1.substr(6, 5)); // "World" (deprecated)

// String replacement
console.log(str1.replace('World', 'JavaScript')); // "Hello JavaScript"
console.log(str1.replaceAll('l', 'L')); // "HeLLo WorLd"

// String case conversion
console.log(str1.toLowerCase()); // "hello world"
console.log(str1.toUpperCase()); // "HELLO WORLD"

// String trimming
const padded = '  Hello World  ';
console.log(padded.trim()); // "Hello World"
console.log(padded.trimStart()); // "Hello World  "
console.log(padded.trimEnd()); // "  Hello World"

// String splitting and joining
const words = str1.split(' '); // ["Hello", "World"]
const rejoined = words.join('-'); // "Hello-World"

// String padding
console.log('5'.padStart(3, '0')); // "005"
console.log('5'.padEnd(3, '0')); // "500"

// String comparison
console.log('a'.localeCompare('b')); // -1 (a < b)

// String repetition
console.log('abc'.repeat(3)); // "abcabcabc"

// Template literals (advanced)
const name = 'John';
const age = 30;
const multiline = `
    Name: ${name}
    Age: ${age}
    Status: ${age >= 18 ? 'Adult' : 'Minor'}
`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
  }, '');
}
const highlighted = highlight`Hello ${name}, you are ${age} years old!`;

// Regular expressions with strings
const text = 'The quick brown fox';
console.log(text.match(/quick/)); // ["quick"]
console.log(text.match(/\b\w{4}\b/g)); // ["quick", "brown"]
```

### Objects (Complete Reference)

```javascript
// Object creation
const obj1 = { name: 'John', age: 30 };
const obj2 = new Object();
const obj3 = Object.create(null); // No prototype

// Property access
console.log(obj1.name); // Dot notation
console.log(obj1['age']); // Bracket notation
console.log(obj1?.city); // Optional chaining

// Property assignment
obj1.city = 'New York';
obj1['country'] = 'USA';
obj1[Symbol.for('id')] = 123; // Symbol key

// Property descriptors
Object.defineProperty(obj1, 'id', {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: true,
});

// Object methods
console.log(Object.keys(obj1)); // Property names
console.log(Object.values(obj1)); // Property values
console.log(Object.entries(obj1)); // [key, value] pairs
console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.hasOwnProperty.call(obj1, 'name')); // true

// Object manipulation
const obj4 = Object.assign({}, obj1); // Shallow copy
const obj5 = { ...obj1 }; // Spread syntax (shallow copy)
const frozen = Object.freeze(obj1); // Immutable
const sealed = Object.seal(obj1); // No add/delete properties

// Object comparison and checking
console.log(Object.is(obj1, obj1)); // true
console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true

// Destructuring assignment
const { name, age, city = 'Unknown' } = obj1;
const { name: userName, ...otherProps } = obj1;

// Computed property names
const propName = 'dynamicProp';
const obj6 = {
  [propName]: 'value',
  [`${propName}2`]: 'value2',
};

// Method shorthand
const obj7 = {
  name: 'John',
  greet() {
    // Method shorthand
    return `Hello, I'm ${this.name}`;
  },
  arrowMethod: () => {
    // Arrow function (no 'this' binding)
    return 'Arrow method';
  },
};

// Getters and setters
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

// Object.prototype methods
const child = Object.create(obj1); // Prototype inheritance
console.log(child.hasOwnProperty('name')); // false
console.log('name' in child); // true
console.log(child.propertyIsEnumerable('name')); // false
```

### Error Handling

```javascript
// Try-catch-finally
try {
  // Risky code
  const result = riskyFunction();
  console.log(result);
} catch (error) {
  // Handle errors
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);
} finally {
  // Always executes
  console.log('Cleanup code');
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Error types
try {
  throw new TypeError('Type error');
  throw new ReferenceError('Reference error');
  throw new SyntaxError('Syntax error');
  throw new RangeError('Range error');
} catch (e) {
  if (e instanceof TypeError) {
    console.log('Handle type error');
  } else if (e instanceof ValidationError) {
    console.log('Handle validation error');
  } else {
    console.log('Handle other errors');
  }
}
```

### Classes and Prototypes

```javascript
// ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    return `Hello, I'm ${this.name}`;
  }

  // Static method
  static species() {
    return 'Homo sapiens';
  }

  // Getter
  get info() {
    return `${this.name} (${this.age})`;
  }

  // Setter
  set info(value) {
    [this.name, this.age] = value.split(' ');
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }

  greet() {
    return `${super.greet()}, I'm a student!`;
  }
}

// Prototype-based approach
function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

// Prototype chain
const john = new Person('John', 30);
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

// Object.setPrototypeOf and Object.getPrototypeOf
const obj = {};
Object.setPrototypeOf(obj, Person.prototype);
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true
```

### Asynchronous JavaScript

```javascript
// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Success!');
    } else {
      reject(new Error('Failed!'));
    }
  }, 1000);
});

// Promise methods
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log('Promise completed'));

// Promise static methods
Promise.all([promise1, promise2]) // All must resolve
  .then((results) => console.log(results));

Promise.allSettled([promise1, promise2]) // Wait for all to complete
  .then((results) => console.log(results));

Promise.race([promise1, promise2]) // First to resolve/reject
  .then((result) => console.log(result));

Promise.resolve('Immediate success'); // Immediate resolution
Promise.reject(new Error('Immediate failure')); // Immediate rejection

// Async/Await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Parallel vs Sequential execution
async function parallelExecution() {
  const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
}

async function sequentialExecution() {
  const result1 = await fetchData1();
  const result2 = await fetchData2();
}
```

### Modern JavaScript Features

#### Destructuring

```javascript
// Array destructuring
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3]; // Skip elements
const [head, ...tail] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age } = person;
const { name: userName, age: userAge } = person; // Rename
const { city = 'Unknown' } = person; // Default values
const {
  address: { street, zip },
} = person; // Nested

// Function parameter destructuring
function greet({ name, age = 25 }) {
  return `Hello ${name}, you are ${age}`;
}
```

#### Template Literals

```javascript
// Basic usage
const name = 'John';
const greeting = `Hello, ${name}!`;

// Multi-line strings
const multiLine = `
    Line 1
    Line 2
    Line 3
`;

// Expression evaluation
const math = `2 + 3 = ${2 + 3}`;

// Tagged templates
function css(strings, ...values) {
  // Custom processing
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');
}

const styles = css`
  color: ${'red'};
  font-size: ${16}px;
`;
```

#### Modules (ES6)

```javascript
// Export (in module.js)
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export default class Calculator {}

// Import (in main.js)
import Calculator, { PI, add } from './module.js';
import * as MathUtils from './module.js';
import { add as addition } from './module.js';

// Dynamic imports
async function loadModule() {
  const module = await import('./module.js');
  return module.default;
}
```

#### Advanced Array Methods

````javascript
const numbers = [1, 2, 3, 4, 5];

// Find methods
const found = numbers.find(n => n >
````

## 🎯 Learning Goals

- [ ] Master fundamental data structures
- [ ] Understand time and space complexity
- [ ] Solve algorithmic problems efficiently
- [ ] Practice coding interview questions
- [ ] Build problem-solving skills

## 📋 Topics Covered

### Data Structures
- [ ] Arrays
- [ ] Linked Lists
- [ ] Stacks
- [ ] Queues
- [ ] Trees
- [ ] Graphs
- [ ] Hash Tables
- [ ] Heaps

### Algorithms
- [ ] Sorting Algorithms
- [ ] Searching Algorithms
- [ ] Graph Algorithms
- [ ] Dynamic Programming
- [ ] Greedy Algorithms
- [ ] Divide and Conquer
- [ ] Backtracking

## 🔗 Useful Resources

- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [LeetCode](https://leetcode.com/) - Practice problems
- [GeeksforGeeks](https://www.geeksforgeeks.org/) - Algorithms and data structures
- [Visualgo](https://visualgo.net/) - Algorithm visualizations

## 📞 Quick Commands

```bash
# Run a specific file
node filename.js

# Check Node.js version
node --version

# Initialize npm project (if needed)
npm init -y

# Install packages (if needed)
npm install package-name
````

## 📈 Progress Tracking

- **Start Date**: 6th September 2025
- **Current Topic**: Functions/if-else

---

_"The expert in anything was once a beginner."_ - Helen Hayes

Keep coding, keep learning! 🌟
