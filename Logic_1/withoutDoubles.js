function withoutDoubles(die1, die2, noDoubles){
  if(noDoubles && (die1 == die2 )){
     return (die1 < 6)? die1 + die2+1 : die2+1;
  }

  else return die1 + die2;
}