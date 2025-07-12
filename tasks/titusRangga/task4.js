exports.operationTimes2 = function (arr){
    let newArr = 1;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 == 0) continue;
        newArr *= arr[i];
    }
    return newArr
}

// console.log(operationTimes1(countArray_1))
// console.log(operationTimes1(countArray_2))