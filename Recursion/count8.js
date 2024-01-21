function count8(n){
  if(n == 0)return 0;
  else{
    let lastDigit = n % 10;
    let secondToLastDigit = Math.floor(n / 10) % 10;
    
    if(lastDigit === 8){
       if (secondToLastDigit === 8) {
        return 2 + count8(Math.floor(n / 10));
      } else {
        return 1 + count8(Math.floor(n / 10));
      }
      
    }else {
      return count8(Math.floor(n / 10));
    }
      
    
  }
}