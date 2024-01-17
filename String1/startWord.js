function startWord(str, word){
  if (word.length > 0 && str.substring(1, word.length) === word.substring(1)) {
    
    return str.substring(0, word.length);
  } else {
    return '';
  }
}