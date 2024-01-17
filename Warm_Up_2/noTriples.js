function noTriples(nums){
  let cnt = 1;
  for(let i=0;i<nums.length-1 ;i++){
     if(nums[i] === nums[i+1]){
        cnt++;
       if(cnt == 3)return false;
     }
    else{
      cnt=1;
    }
  }
  return true;
}