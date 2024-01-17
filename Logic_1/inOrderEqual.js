function inOrderEqual(a, b, c, equalOk){
  if(!equalOk && (b > a && c > b)) return true;
  else if(equalOk && (b >= a && c >= b))return true;
  else return false;
}