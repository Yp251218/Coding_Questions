function has271(nums){
  for(let i=0;i<nums.length - 2;i++){
     const first = nums[i];
     if(first === 2){
        if(first + 5 === nums[i+1] && first -1 ===nums[i+2]){
           return true;
        }
     }  
  }
  return false;
}