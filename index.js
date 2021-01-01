function mapToNegativize(e) {
  let x = []
  for (let i = 0; i < e.length; i++ ) {
    x.push(-1 * e[i])
  }
  return x
}

function mapToNoChange(e) {
  let x = []
  for (let i = 0; i < e.length; i++ ) {
    x.push(e[i])
  }
  return x
}

function mapToDouble(e) {
  let x = []
  for (let i = 0; i < e.length; i++ ) {
    x.push(2 * e[i])
  }
  return x
}

function mapToSquare(e) {
  let x = []
  for (let i = 0; i < e.length; i++ ) {
    x.push(e[i] * e[i])
  }
  return x
}

function reduceToTotal(e, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < e.length; i++ ) {
    total = total + e[i]
  }
  return total
}

function reduceToAllTrue(e) {
  for (let i = 0; i < e.length; i++ ) {
    if (!e[i]) return false
  }
  return true
}

function reduceToAnyTrue(e) {
  for (let i = 0; i < e.length; i++ ) {
    if (e[i]) return true
  }
  return false
}