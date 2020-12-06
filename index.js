// Your code here

function mapToNegativize(source){
  let arr=[]
  for (let i = 0; i < source.length; i++ ){
     arr.push(-1 * source[i])
    }
    return arr
  }
   
   
   function mapToNoChange(source){
  let sarr=[]
  for (let i = 0; i < source.length; i++ ){
    sarr.push(source[i])
  }
  return sarr
   }

 function mapToDouble(source){
  let m = [];
  for (let i = 0; i < source.length; i++ ){
    m.push(2 * source[i]);
  }
  return m;
   }

function mapToSquare(source){
  let a=[];
  for (let i = 0; i < source.length; i++ ){
    a.push(source[i] ** 2)
  }
  return a;
   }
   
   function reduceToTotal(source, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < source.length; i++ ) {
    total = total + source[i]
  }
  
  return total
}


  function reduceToAllTrue(source){
  for (let i = 0; i < source.length; i++ ) {
    if (!source[i]) return false }
     return true
}


  function reduceToAnyTrue(source){
  for (let i = 0; i < source.length; i++ ) {
    if (source[i]) return true }
    return false
    
}
