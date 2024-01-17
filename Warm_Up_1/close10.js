function close10(a, b){
  const first = Math.abs(10-a);
  const second = Math.abs(10-b);
  if(first === second)return 0;
  else if(first > second)return b;
  else return a;
}