function isValidIP(str) {
  console.log(str)
  const nums = str.split('.')
  if (nums.length !== 4) return false
  for (let i = 0; i < nums.length; i++) {
    if (!/^\d+$/.test(nums[i])
      || nums[i].length > 1 && nums[i][0] === '0'
      || isNaN(Number(nums[i])) 
      || Number(nums[i]) > 255
    ) {
      return false
    }
  }

  return true;
}