// Your code here
function mapToNegativize(arr){
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i] * -1
  }
  return newArray
}

function mapToNoChange(arr){
  let newArray=[]
  for(let i=0;i<arr.length;i++){
  newArray[i]=arr[i]}
  return newArray
}

function mapToDouble(arr){
  let newArray=[]
  for(let i=0;i<arr.length;i++){
  newArray[i]=arr[i]*2 
  }
  return newArray
}

function mapToSquare(arr){
  let newArray=[]
  for(let i=0;i<arr.length;i++){
  newArray[i]=arr[i]**2
  }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0){
  let sum = startingPoint;
  for(let i=0;i<sourceArray.length;i++){
    sum += sourceArray[i];
  }
  return sum
}

function reduceToAllTrue(sourceArray){
  for(let i=0;i<sourceArray.length;i++){
    if(!sourceArray[i]) 
    return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray){
  for(let i=0;i<sourceArray.length;i++){
    if(sourceArray[i]) 
    return true;
  }
  return false;
}