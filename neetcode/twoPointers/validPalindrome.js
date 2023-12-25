var isPalindrome = function(s) {
    if(s.length <= 1) return true
    
    let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    let start = 0
    let end = newString.length- 1

    while(start<end){
        if(newString[end] == newString[start]){
            start++
            end--
        }else{
            return false
        }
    }
    return true
    
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('racecar'))
