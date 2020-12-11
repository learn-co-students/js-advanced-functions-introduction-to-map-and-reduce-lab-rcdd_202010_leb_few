// Your code here
function mapToNegativize(sourceArray){
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(-1 * sourceArray[i])
  }
  return r
}

function mapToNoChange(sourceArray){
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i])
  }
  return r
}

function mapToDouble(sourceArray){
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i]*2)
  }
  return r
}
function mapToSquare(sourceArray){
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i]*sourceArray[i])
  }
  return r
}
function reduceToTotal(sourceArray, startingPoint=0){
  let r = startingPoint;
  for (let i = 0; i < sourceArray.length; i++ ) {
    r+=sourceArray[i];
  }
  return r
}
function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}
function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}