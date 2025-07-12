const task1 = require("./tasks/titusRangga/task1.js");
const task2 = require("./tasks/titusRangga/task2.js");
const task3 = require("./tasks/titusRangga/task3.js");
const task4 = require("./tasks/titusRangga/task4.js");
const task5 = require("./tasks/titusRangga/task5.js");
const task6 = require("./tasks/titusRangga/task6.js");

const number = 10;
try{
    task1.main1(number)
    console.log()
}catch (err){
    console.log(err.message);
}

let countArray_1 = [1, 2, 3, 4, 5]
let countArray_2 = [2, 2, 2, 2, 2]

console.log(task2.operationTimes1(countArray_1))
console.log(task2.operationTimes1(countArray_2))
console.log()

try{
    task3.main2(number)
    console.log()
}catch (err){
    console.log(err.message);
}

console.log(task4.operationTimes2(countArray_1))
console.log(task4.operationTimes2(countArray_2))
console.log()

try{
    task5.main3(number)
    console.log()
}catch (err){
    console.log(err.message);
}

console.log(task6.buatRentang(1, 5))
console.log(task6.buatRentang(5, 10))