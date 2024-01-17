function delDel(str){
  let first = str.indexOf('del');
  let newStr;
  if(first == 1){
     newStr = str.replace('del','');
  }
  else{
    newStr = str;
  }
  return newStr;
}