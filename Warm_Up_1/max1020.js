function max1020(a, b){
  if(a>b && (a>=10 && a<=20)&& (b>=10 && b<=20))return a;
  else if(a<b && (b>=10 && b<=20) && (a>=10 && a<=20))return b;
  else return 0;
}