function bunnyEars2(bunnies){
  if (bunnies === 0) {
    return 0;
  } else if (bunnies % 2 === 1) {
    return 2 + bunnyEars2(bunnies - 1);
  } else {
    return 3 + bunnyEars2(bunnies - 1);
  }
}