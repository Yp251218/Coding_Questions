function makeOutWord(str, word){
  const newStr = str.substr(0,2);
  const lastStr = str.slice(-2);
  
  return newStr+word+lastStr;
}