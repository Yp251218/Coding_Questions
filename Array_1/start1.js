function start1(a, b){
  const first = a[0];
  const second = b[0];
  
  if(first == 1 && second == 1)return 2;
  else if(first == 1 || second == 1)return 1;
  else return 0;
}