// function factorial(num){
//     if (num === 1) console.log(1);
//     return num * factorial(num-1)
// }

// factorial(4)


function adder(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }
  
  const result = adder(2);
  console.log(result);