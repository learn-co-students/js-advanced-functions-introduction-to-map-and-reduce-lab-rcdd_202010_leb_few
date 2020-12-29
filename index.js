// Your code here
function mapToNegativize(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++ ) {
    a.push(-1 * arr[i])
  }
  return a
}

function mapToNoChange(arr) {
  let a = []
  for (let i = 0; i < arr.length; i++ ) {
    a.push(arr[i])
  }
  return a
}

function mapToDouble(arr) {
  let a = []
  for (let i = 0; i < arr.length; i++ ) {
    a.push(2 * arr[i])
  }
  return a
}

function mapToSquare(arr) {
  let a = []
  for (let i = 0; i < arr.length; i++ ) {
    a.push(arr[i] * arr[i])
  }
  return a
}

function reduceToTotal(arr, start=0) {
  let total = start
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}