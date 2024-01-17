function lastChars(a, b){
   const first = a.length > 0 ? a.charAt(0) : '@';
  const second = b.length > 0 ? b.slice(-1) : '@';
  return first + second;
}