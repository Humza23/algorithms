function factorial(num){
    if (num === 1) console.log(1);
    return num * factorial(num-1)
}

factorial(4)


function adder(num){
    let total = 0
   for (let i =0;i<num;i++){
    total += num[i]
   }
   return total
}

adder(5)