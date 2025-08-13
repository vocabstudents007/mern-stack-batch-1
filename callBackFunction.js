// function add(x,y){
//     return x+y;
// }

// function substract(a,b){
//     return a-b;
// }

// function arithmaticOperation(x,y,calllBackFn){
//     return calllBackFn(x,y);
// }


// console.log(add(10,2));
// console.log(substract(10,2));
// console.log(arithmaticOperation(10,2,add));


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }

// for(let element of arr){
//     console.log(element);
    
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenNumber = []
// let sum = 0
// function printElement(element){
//     sum += element;
// }
// arr.forEach(printElement)
// console.log("sum of number",sum);

// function printElementWithIndex(element,index){
//     console.log(`Element is ${element} and it's index is ${index}`);
// }

// arr.forEach((element,index) =>{
//     console.log(`Element is ${element} and it's index is ${index}`);
// })
// function printElement(element){
//    console.log(element);
// }
// arr.forEach(element => console.log(element))
let arr = [1,2,3,4,5,6,7,8,9,10];

// Filter
function isEven(x){
    return x%2 === 0;
}
// let evenNumber = arr.filter(isEven);
// let evenNumber = arr.filter(x => x%2 === 0);
// console.log(evenNumber);

// function cubeNumber(x){
//     return x**3;
// }

// let cubes = arr.map(cubeNumber);
// let cubes = arr.map(x => x**3);
// console.log(cubes);

let student = {
    "name" : "Danish",
    "age" : 25,
    "isPassed" : true,
    "phoneNumber" : 9876543210,
    subjects : ["Javascript","java","Python"]
}

let s = student['subjects'];
s.filter(x => x.toLowerCase().includes("java"))
    .map(x => x.toUpperCase())
    .forEach(x => console.log(x));


