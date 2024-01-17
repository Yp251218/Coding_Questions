function frontTimes(str, n){
  if(str.length >=3)const newstr = str.substr(0,3);
  else const newstr = str;
  
  const ans='';
  
  for(let i=0;i<n;i++){
     ans+=newstr;
  }
  return ans;
}