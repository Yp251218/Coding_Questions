function doubleX(str){
  const index = str.indexOf('x');
  if(str[index+1] == 'x')return true;
  return false;
}