function notString(str){
  const words = str.split(' ');
  
  if(words.length > 0 && words[0].toLowerCase() == 'not'){
      return str;
  }
  else{
     return 'not ' + str;
  }
  
}