
///4
function sumArr(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  else {
    return arr.pop() + sumArr(arr)
  }
};

sumArr([1,2,3,4,5,6])


///5
function icyHot(temp1 , temp2){
if((temp1 < 0 && temp2 >100) || (temp1 > 100 && temp2  < 0)) return true

  return false
}
//////6
function makes10(a ,b) {
  if(a==10 || b==10 || (a+b)===10) return true
return false
}
//////7
function front22(value) {
  if(typeof value ==='string'){
  if(value.length<2){
    return value+value+value
}else {
  return value.substring(0,2)+value+value.substring(0,2)
}
}
return null
}
