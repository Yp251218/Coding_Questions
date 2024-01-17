function nTwice(str, n){
  if(n==0)return '';
  const first = str.substr(0,n);
  const second = str.slice(-n);
  return first+second;
}