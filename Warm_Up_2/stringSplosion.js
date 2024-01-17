function stringSplosion(str){
   let arr = [];
  for(let i=1;i<=str.length;i++){
     let newstr = str.substr(0,i);
    arr.push(newstr);
  }
  
  return arr.join('');
}