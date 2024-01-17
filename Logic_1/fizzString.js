function fizzString(str){
  const first = str.charAt(0);
  const last = str.slice(-1);
  
  if(first === 'f' && last === 'b')return 'FizzBuzz';
  else if(first === 'f')return 'Fizz';
  else if(last === 'b')return 'Buzz';
  else return str;
}