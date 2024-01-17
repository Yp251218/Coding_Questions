function minCat(a, b){
  if(a.length ==0 || b.length==0)return ''
  if(a.length > b.length){
     const temp = a.slice(-b.length);
    return temp+b;
  }else{
     const temp = b.slice(-a.length);
    return a+temp;
  }
}