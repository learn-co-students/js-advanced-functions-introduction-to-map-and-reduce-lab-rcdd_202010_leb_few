// Your code here
function mapToNegativize(sourceArray){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray[i] = sourceArray[i] * -1
  }
  return newArray
}
function mapToNoChange(sourceArray){
  let newArray = []
  sourceArray.forEach(elem =>{
    newArray.push(elem)
  })
  return newArray
}
function mapToDouble(sourceArray){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray[i] = sourceArray[i]*2
  }
  return newArray
}
function mapToSquare(sourceArray){
  let newArray = []
  sourceArray.forEach((elem) =>
    newArray.push(elem**2)
  )
  return newArray
}
function reduceToTotal(sourceArray, startingPoint = 0){
  let sum = startingPoint
    sourceArray.forEach(elem =>{
        sum += elem
      })
  return sum
}
sourceArray = [1,2,3]
startingPoint = 0
reduceToTotal(sourceArray,startingPoint)

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    if(!sourceArray[i]) return false
  }  return true
}
function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    if(sourceArray[i]) return true
  }
  return false
}
