function factorial(num){
    if (num === 1) console.log(1);
    return num * factorial(num-1)
}

factorial(4)