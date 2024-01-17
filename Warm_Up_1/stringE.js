function stringE(str){
  const newStr = str.split('');
  let cnt = 0;
  for(let i=0;i<newStr.length;i++){
     if(newStr[i] == 'e')cnt++;
  }
  
  if(cnt>=1 && cnt<=3)return true;
  else return false;
}