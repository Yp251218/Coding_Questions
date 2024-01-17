function stringMatch(a, b){
  let i =0;
  let cnt = 0;
  while(i<a.length-1  && i<b.length-1 ){
    if(a.substr(i,2) === b.substr(i,2)){
       cnt++;
      
      
    }
    i++;
  }
  
  return cnt;
}