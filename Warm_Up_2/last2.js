function last2(str){
  let n = str.length;
  if(n<2)return 0;
  const newstr = str.substr(n-2,n-1);
  
  let count = cnt(str,newstr);
  return count-1;
}

function cnt(str,newstr){
   let count = 0;
  for(let i=0;i<str.length - newstr.length +1 ;i++){
     if(str.substring(i,i+newstr.length) === newstr){
         count++;
     }
  }
  return count;
}