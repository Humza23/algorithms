// let str1 = 'wowzmomgwaomgasxogomg'
// let str2 = 'omg'

function stringSearch(str1,str2){
    let firstPointer = 0
    let secondPointer = 0
    let counter = 0


    while(firstPointer < str1.length){
        if(str2[secondPointer] == str1[firstPointer]){
            secondPointer++
            firstPointer++
        }else{
            secondPointer = 0
            firstPointer++
        }

        if(secondPointer == str2.length){
            counter++
            secondPointer = 0
        }

    }

    return counter

}


console.log(stringSearch('wowzmomgwaomgasxomgsaomfaomggaad', 'omg'))