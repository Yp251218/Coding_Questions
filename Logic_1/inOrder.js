function inOrder(a, b, c, bOk){
  if(bOk && c > b)return true;
  else if(!bOk && ((b > a) && (c > b)))return true;
  else return false;
}