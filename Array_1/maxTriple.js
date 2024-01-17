function maxTriple(nums){
  var middleIndex = Math.floor(nums.length / 2);
    return Math.max(nums[0], nums[middleIndex], nums[nums.length - 1]);
}