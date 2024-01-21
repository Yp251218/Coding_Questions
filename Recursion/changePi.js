function changePi(str){
  if(str.length == 0 || !str.includes("pi"))return str;
  
  return changePi(str.replace('pi','3.14'));
}