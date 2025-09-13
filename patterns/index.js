let n = 4;

for (let i = 0; i < n; i++) {
  let row = ''
  for (let j = 0; j < n; j++) {
    row += "*  "
  }
  console.log(row);
}

console.log("");

for (let i = 0; i < n; i++) {
  let row = ''
  for (let j = 0; j <= i; j++) {
    row += "*  "
  }
  console.log(row);
}

console.log("");

for (let i = 0; i <= n; i++) {
  let row = ''
  for (let j = 0; j <= i; j++) {
    row += `${j + 1}  `
  }
  console.log(row);
}