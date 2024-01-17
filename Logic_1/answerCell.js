function answerCell(isMorning, isMom, isAsleep){
  if(isMorning && isMom && !isAsleep)return true;
  else if(!isMorning && !isAsleep)return true;
  else if(isMorning) return false;
  else return false;
}