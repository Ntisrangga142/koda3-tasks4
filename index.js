/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "Person Name"
 */

// import your tasks here

const task1 = require("./tasks/titusRangga/task1.js");
const task2 = require("./tasks/titusRangga/task2.js");
const task3 = require("./tasks/titusRangga/task3.js");
const task4 = require("./tasks/titusRangga/task4.js");
const task5 = require("./tasks/titusRangga/task5.js");
const task6 = require("./tasks/titusRangga/task6.js");

function taskTitus (){
    const number = 10;

    task1.main1(number);
    console.log()

    let countArray_1 = [1, 2, 3, 4, 5]
    let countArray_2 = [2, 2, 2, 2, 2]

    console.log(task2.operationTimes1(countArray_1))
    console.log(task2.operationTimes1(countArray_2))
    console.log()

    task3.main2(number);
    console.log()

    console.log(task4.operationTimes2(countArray_1))
    console.log(task4.operationTimes2(countArray_2))
    console.log()

    task5.main3(number);
    console.log()

    console.log(task6.buatRentang(1, 5))
    console.log(task6.buatRentang(5, 10))
}

taskTitus()