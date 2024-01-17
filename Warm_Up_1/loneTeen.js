function loneTeen(a, b){
  const isTeenA = a >= 13 && a <= 19;
  const isTeenB = b >= 13 && b <= 19;

  return (isTeenA && !isTeenB) || (!isTeenA && isTeenB);
}