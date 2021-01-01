// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}
function mapToNoChange(sourceArray){
  return sourceArray.map(x=>x);
}
function mapToDouble(sourceArray){
  return sourceArray.map(x=>x*2)
}
function mapToSquare(sourceArray){
  return sourceArray.map(x=>x*x)

}
function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}
function reduceToAllTrue(sourceArray){
  return sourceArray.reduce((accumulator, currentValue) =>currentValue?true:false)
}
function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce((accumulator, currentValue) =>currentValue?true:false)
}
