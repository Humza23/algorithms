var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    
    while(start<end){
        let middle = Math.floor(nums.length / 2)
        if(target == nums[middle]) return middle
        if (target > nums[middle]){
            start = middle +1
        }else if (target < nums[middle]){
            end = middle-1
        }

    }
    return -1
    
};


console.log(search([-1,0,3,5,9,12], 9))