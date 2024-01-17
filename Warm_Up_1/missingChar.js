function missingChar(str, n){
  const newstr = str.replace(str.charAt(n),'');
  return newstr;
}