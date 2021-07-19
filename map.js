// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

const nums = [2, 7, 11, 15];

const twoSum = function(nums, target) {
  const diffs = {}
  const len = nums.length;

  for (let i = 0; i < len; i++) {
      // 判断当前值对应的target差值是否存在
      if ( diffs[target-nums[i]] !== undefined){
        // 若有对应差值 返回
        return [diffs[target - nums[i]], i]
      }
      // 若没有对应差值，则记录当前值
      diffs[nums[i]]=i
  }
}

// es6 map
const twoSum1 = function(nums, target) {
  const map = new Map();
  for(let i = 0; i<nums.length;i++){
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
}

const res = twoSum(nums, 9);
console.log(res);
