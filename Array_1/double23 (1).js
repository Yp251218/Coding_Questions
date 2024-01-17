function double23(nums){
  return nums.length == 2 && (nums.filter(num => num === 2).length === 2 || nums.filter(num => num === 3).length === 2)
}