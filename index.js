// Your code here

function mapToNegativize(arr){
  let arr1=[]
  for(let i=0;i<arr.length;i++){
    arr1[i]=arr[i]*-1
  }
  return arr1
}
 
 function mapToNoChange(arr){
   let arr2=[]
   for(let i=0;i<arr.length;i++){
     arr2[i]=arr[i]
   }
   return arr2
 }
 
 function mapToDouble(arr){
   let arr3=[]
   for(let i=0;i<arr.length;i++){
     arr3[i]=arr[i]*2
   }
   return arr3
 }
 
 function mapToSquare(arr){
   let arr4=[]
   for(let i=0;i<arr.length;i++){
     arr4[i]=arr[i]*arr[i]
   }
   return arr4
 }
 
 function reduceToTotal(arr,startingPoint=0){
   let sum=startingPoint
   for(let i=0;i<arr.length;i++){
     sum+=arr[i]
   }
   return sum
 }
 
 function reduceToAllTrue(arr){
   for(let i=0;i<arr.length;i++){
     if(!arr[i])
       return false
   }
     return true
   
 }
 
 function reduceToAnyTrue(arr){
   for(let i=0;i<arr.length;i++){
     if(arr[i])
     return true
   }
   return false
 
 }