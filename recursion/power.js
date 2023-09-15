// power(2,2) // 4

function power(base,exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1)
    
}


console.log(power(2,5)) // 32

// 2* exponent 3
// 2* exponent 2
// 2* exponent 1
// 2* exponent 0