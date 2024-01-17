function front3(str){
  if(str.length < 3) return str+str+str;
  else{
     const newStr = str.substr(0,3);
    return newStr+newStr+newStr;
  }
}