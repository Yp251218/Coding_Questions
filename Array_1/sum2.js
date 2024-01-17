function sum2(nums){
  if(nums.length < 2){
    return sum(nums);
  }else{
     return nums[0] + nums[1];
  }
}

function sum(nums){
  let ans = 0;
   for(let i=0;i<nums.length;i++){
      ans = ans + nums[i];
   }
  return ans;
}