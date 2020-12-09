// Your code here
///////////////////////////////////////////////////////////////
let arr1=[1,2,3,-9];

function mapToNegativize(arr1)
 {
    for (var i = 0; i < arr1.length; i++)
    {
      arr1[i] *= (-1);
    }
  return arr1;
}
///////////////////////////////////////////////////////////////
function mapToNoChange(arr1)
{
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] *= 1;
  }
  return arr1;
}
///////////////////////////////////////////////////////////////
function mapToDouble(arr1)
{
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] *= 2;
  }
  return arr1;
}
///////////////////////////////////////////////////////////////
function mapToSquare(arr1)
{
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] **2;
  }
  return arr1;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
let arr2=[1,2,3];

function reduceToTotal(arr2, x=0)
{
  let sum = x
  for (let i = 0; i < arr2.length; i++ )
  {
    sum += arr2[i]
  }
  return sum
}
///////////////////////////////////////////////////////////////
function reduceToAllTrue(arr2)
{
  for (var i = 0; i < arr2.length; i++)
  {
    if(!arr2[i])
    return false;
  }
  return true;
}
///////////////////////////////////////////////////////////////
function reduceToAnyTrue(arr2)
{
  for (var i = 0; i < arr2.length; i++)
  {
    if(arr2[i])
    return true;
  }
  return false;
}
