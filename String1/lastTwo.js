function lastTwo(str){
  if(str.length < 2)return str;
  
  let first = str.slice(0,-2);
  let lastTwo = str.slice(-2);
  
  return first + lastTwo[1] + lastTwo[0];
}