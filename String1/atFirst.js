function atFirst(str){
  if(str.length >=2){
    return str.substr(0,2);
  }
  else{
    return str.length === 1? str + '@' : '@@';
      
  }
}