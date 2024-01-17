function right2(str){
  const newstr = str.slice(-2);
  const ans = str.replace(newstr,'');
  
  return newstr+ans;
}