// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/*****
示例: 输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6]
*****/

// 双指针
const merge = function(nums1,m,nums2,n) {
  // 初始化两个指针的指向，i为第一个索引 k为尾部索引
  let i = m -1, j = n -1, k = m+n-1;
  // 当两个数组都没有遍历完，指针同步移动
  while(i>=0 && j >= 0) {
    // 取最大的值，从末尾往前填补
    if(nums1[i] >= nums2[i]){
      nums1[k] = nums1[i]
      // 移动指针
      i--
      k--
    }else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }

  // nums2留下的情况，特殊处理一下
  while(j>=0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

  return nums1;
}


// const merge = function (nums1, m, nums2, n) {
//     nums1.splice(m);
//     console.log(nums1)
//     nums2.splice(n);
//     console.log(nums2)
//     return [...nums1, ...nums2].sort((a, b) => a - b);
// }

// const merge = function(nums1, m, nums2, n) {
//   nums1.splice(m, n, ...nums2);
//   nums1.sort((a, b) => a - b);
//   return nums1;
// };

const res = merge([1,2,3,0,0,0],3,[2,5,6],3)
console.log(res)
