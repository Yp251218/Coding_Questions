function seeColor(str){
  const red = str.substr(0,3);
  const blue = str.substr(0,4);
  
  if(red === 'red')return 'red';
  if(blue === 'blue')return 'blue';
  else return ''
}