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
let name = "John";        // String
const age = 25;          // Number (constant)
var isStudent = true;    // Boolean

// Data types
let arr = [1, 2, 3];           // Array
let obj = { key: "value" };    // Object
let nothing = null;            // Null
let undefined_var;             // Undefined
```

### Functions
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Function expression
const multiply = function(a, b) {
    return a * b;
};
```

### Conditional Statements
```javascript
// If-else
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Ternary operator
const result = condition ? "true value" : "false value";

// Switch case
switch (variable) {
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    default:
        // default code
}
```

### Loops
```javascript
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
while (condition) {
    // code
}

// For...of (arrays)
for (const item of array) {
    console.log(item);
}

// For...in (objects)
for (const key in object) {
    console.log(key, object[key]);
}
```

### Operators

#### Arithmetic Operators
```javascript
+ // Addition
- // Subtraction
* // Multiplication
/ // Division
% // Modulus
** // Exponentiation
++ // Increment
-- // Decrement
```

#### Comparison Operators
```javascript
== // Equal to (loose)
=== // Equal to (strict)
!= // Not equal (loose)
!== // Not equal (strict)
> // Greater than
< // Less than
>= // Greater than or equal
<= // Less than or equal
```

#### Logical Operators
```javascript
&& // Logical AND
|| // Logical OR
! // Logical NOT
```

### Array Methods
```javascript
const arr = [1, 2, 3, 4, 5];

// Adding/removing elements
arr.push(6);           // Add to end
arr.pop();             // Remove from end
arr.unshift(0);        // Add to beginning
arr.shift();           // Remove from beginning

// Iteration methods
arr.forEach(item => console.log(item));
const doubled = arr.map(item => item * 2);
const evens = arr.filter(item => item % 2 === 0);
const sum = arr.reduce((acc, item) => acc + item, 0);

// Other useful methods
arr.indexOf(3);        // Find index
arr.includes(4);       // Check if exists
arr.slice(1, 3);       // Extract portion
arr.splice(1, 2, 'a'); // Remove/add elements
```

### String Methods
```javascript
const str = "Hello World";

str.length;            // Length
str.toUpperCase();     // Convert to uppercase
str.toLowerCase();     // Convert to lowercase
str.charAt(0);         // Character at index
str.substring(0, 5);   // Extract substring
str.split(" ");        // Split into array
str.replace("World", "JavaScript"); // Replace text
str.trim();            // Remove whitespace
```

### Object Operations
```javascript
const obj = {
    name: "John",
    age: 30
};

// Accessing properties
obj.name;              // Dot notation
obj["name"];           // Bracket notation

// Adding/modifying properties
obj.city = "New York";
obj["country"] = "USA";

// Object methods
Object.keys(obj);      // Get all keys
Object.values(obj);    // Get all values
Object.entries(obj);   // Get key-value pairs
```

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
```

## 📈 Progress Tracking

- **Start Date**: 6th September 2025
- **Current Topic**: Functions/if-else

---

*"The expert in anything was once a beginner."* - Helen Hayes

Keep coding, keep learning! 🌟