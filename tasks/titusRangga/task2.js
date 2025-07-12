exports.operationTimes1 = function (arr){
    let newArr = 1;
    for(let i = 0; i < arr.length; i ++) newArr *= arr[i];
    return newArr
}

// console.log(operationTimes(countArray_1))
// console.log(operationTimes(countArray_2))