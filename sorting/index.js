function searchElement(a, n, target) {
  for (let i = 0; i < n; i++) {
    if (a[i] === target) return i
  }
  return -1
}

let a = [10, 2, 3, 1, 25, 6, 7, 8, 9]

console.log(searchElement(a, a.length, 1));