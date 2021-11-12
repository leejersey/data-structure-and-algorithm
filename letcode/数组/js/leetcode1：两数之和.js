const twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i< nums.length; i++) {
      let k = target-nums[i]
      if(map.has(k)) {
          return [map.get(k), i]
      }
      map.set(nums[i], i)
  }
  return [];
};

const nums = [2, 7, 11, 15];
const res = twoSum(nums, 9);
console.log(res);