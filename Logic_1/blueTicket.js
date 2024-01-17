function blueTicket(a, b, c){
  const first = a + b;
  const second = b + c;
  const third = a + c;
  
  if(first == 10 || second ==  10 || third == 10)return 10;
  else if((first - 10 == second) || (first - 10 == third))return 5;
  else return 0;
}