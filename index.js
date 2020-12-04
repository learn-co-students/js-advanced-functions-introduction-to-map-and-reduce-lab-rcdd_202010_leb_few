function mapToNegativize(n){
  let mapped = n.map(elem => elem*(-1))
  return mapped
}
function mapToNoChange(w){
  let print = w.map(elem => elem)
  return print
}
function mapToDouble(d){
  let doubled = d.map(elem => elem*2)
  return doubled
}
function mapToSquare(s){
  let squared = s.map(elem => elem**2)
  return squared
}

function reduceToTotal(sourceArray, startingPoint=0){
  
  let sa = sourceArray.reduce((accumulator, currentValue) => { return accumulator+currentValue}, startingPoint) 
  return sa
}

function reduceToAllTrue(sourceArray){
  let se = sourceArray.reduce((acc, val) => 
     acc && Boolean(val), true);
   return se
}
function reduceToAnyTrue(sourceArray){
  let sf = sourceArray.reduce((acc, val) => 
     acc || Boolean(val), false);
   return sf
}