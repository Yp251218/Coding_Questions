function countHi(str, i=0){
 if (i > str.length - 2) {
    return 0;
  }
  return (str.slice(i, i + 2) === 'hi' ? 1 : 0) + countHi(str, i + 1);
}