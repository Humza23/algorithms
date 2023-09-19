function isPalindrome(str){
    let reversedStr = ''
    
    function helper(helperInput){
        if(helperInput.length === 0) return;
        
        reversedStr = reversedStr + helperInput.slice(-1)
        
        helper(helperInput.slice(0,-1))

    }
    
    helper(str)
    
    return str == reversedStr
}


// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
    
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }