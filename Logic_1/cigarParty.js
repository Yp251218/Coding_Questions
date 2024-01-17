function cigarParty(cigars, isWeekend){
  if((!isWeekend) && (cigars>=40 && cigars<=60)){
    return true;
  }
  if(isWeekend && cigars>=40)return true;
  
  return false;
}