function nearHundred(n){
  if((Math.abs(n-100)<=10) || (Math.abs(200-n)<=10) ){
    return true;
  }
  return false;
}