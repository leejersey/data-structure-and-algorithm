// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:必须在原数组上操作，不能拷贝额外的数组。尽量减少操作次数。

const moveZero = function(arr){
  let n = arr.length;
  for(let i = 0; i < n; i++){
    if(arr[i] == 0) {
      arr.splice(i,1);
      arr.push(0)
      n--; // 减去push 0这一项,如果不减,会造成死循环.
      i--; // 删除一项后,后面的值变成当前位置,遍历时要从当前位置开始
    }
  }
  return arr;
}

// 双指针方法

const arr = [0,1,0,3,12];
const res = moveZero(arr);
console.log(res);
