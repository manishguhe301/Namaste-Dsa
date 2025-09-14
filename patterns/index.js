let n = 5;

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

console.log('sds');

for (let i = 0; i < 5; i++) {
  let row = ''
  for (let j = 0; j <= i; j++) {
    row += `${i + 1}  `
  }
  console.log(row);
}

console.log('');

for (let i = n; i >= 0; i--) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += `${j + 1}  `
  }
  console.log(row);
}

console.log("");

for (let i = n; i >= 0; i--) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*  '
  }
  console.log(row);
}

console.log('');

for (let i = 0; i < n; i++) {
  let row = ''

  for (let j = 0; j < n - (i + 1); j++) {
    row += '-  '
  }

  for (let j = 0; j < i + 1; j++) {
    row += "*  "
  }

  console.log(row);
}


console.log();

for (let i = 0; i < 5; i++) {
  let row = '';
  let switchInt = 1;
  for (let j = 0; j <= i; j++) {
    row += `${switchInt}  `
    switchInt = switchInt === 1 ? 0 : 1
  }
  console.log(row);
}

console.log();

let toggle = 1
for (let i = 0; i < n; i++) {
  let row = '';

  for (let j = 0; j <= i; j++) {
    row += `${toggle} `
    toggle = toggle === 1 ? 0 : 1
  }

  console.log(row);
}