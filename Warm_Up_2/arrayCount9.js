function arrayCount9(nums){
  let cnt = 0;
  for(let i=0;i<nums.length;i++){
     if(nums[i] === 9)cnt++;
  }
  return cnt;
}