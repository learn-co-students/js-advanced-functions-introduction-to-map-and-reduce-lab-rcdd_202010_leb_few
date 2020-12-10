// Your code here
const mapToNegativize=(sourceArray) => sourceArray.map(ele => ele *-1)
const mapToNoChange=(sourceArray) => sourceArray.map(ele => ele)
const mapToDouble=(sourceArray) => sourceArray.map(ele => ele *2)
const mapToSquare=(sourceArray) => sourceArray.map(ele => ele **2);
const reduceToTotal= (sourceArray, startingPoint=0) => sourceArray.reduce((res, acc)=> res + acc, startingPoint)
const reduceToAllTrue=(sourceArray) => sourceArray.reduce( (res, acc) => res&&acc? true:false)
const reduceToAnyTrue=(sourceArray) => sourceArray.reduce( (res, acc) => res||acc? true:false)