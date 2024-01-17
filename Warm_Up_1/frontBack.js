function frontBack(str){
  if(str.length < 2){
       return str;
  }
  let str1 = str[0];
  let str2 = str[str.length - 1];
  let str3 = str.substr(1,str.length - 2);
  let ans = str2+str3+str1;
  return ans;
}