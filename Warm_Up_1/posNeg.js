function posNeg(a, b, negative){
  if (((a < 0 && b > 0) || (a > 0 && b < 0)) && !negative) {
    return true;
  } else if ((a < 0 && b < 0) && negative) {
    return true;
  } else {
    return false;
  }
}