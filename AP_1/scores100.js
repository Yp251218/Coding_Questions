function scores100(scores){
  for (let i = 0; i < scores.length - 1; i++) {
        if (scores[i] === 100 && scores[i + 1] === 100) {
            return true;
        }
    }
    return false;
}