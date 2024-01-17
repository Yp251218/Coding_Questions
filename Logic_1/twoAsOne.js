function twoAsOne(a, b, c){
   let arr = [a,b,c];
  arr.sort((x, y) => x - y); // Sort in ascending order

  return Math.abs(arr[0]) + Math.abs(arr[1]) === Math.abs(arr[2]);
 }