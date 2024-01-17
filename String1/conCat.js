function conCat(a, b){
  if(a.slice(-1) === b.charAt(0)){
    return a+b.substr(1)
  }
  return a+b;
}