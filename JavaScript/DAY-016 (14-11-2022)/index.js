// function x(y){
// console.log("x function");
// console.log(y);
// y();
// }

// x(function y(){
//     console.log("Y function");
// })

// setInterval(() => {
//     console.log("set interval");
// }, 7000);

// setTimeout(() => {
//     console.log("set timeout");
// }, 5000);


// const higherOrder = (m) =>{
//     const a =(n) =>{
//         const b = (o) =>{
//              return m*n*o;
//         }
//         return b;
//     }
//     return a;
// }

// var result  = higherOrder(2)(3)(4);
// console.log(result);

// const arr = [1,2,3,4,5,6,98]

// arr.forEach((element, index, array) => {
//     console.log(element, index, array)
// }) 

// arr.map((element) =>{
//     console.log(element);
// })


// function x (y){
//     console.log("x function");
//     console.log(y);
// }

// x(function y() {
//     console.log("y function");
// })


// setTimeout(() => {
//     console.log("set TimeOut");
// }, 7000);

// setInterval(() => {
//     console.log("set Interval");
// }, 5000);

// //High order function

// const higherOder = () =>{
//     const a = () => { 
//         const b = () => {
//             return 10;
//         }
//         return b;
//     }
//     return a
// }
// var result = higherOder();
// console.log(result);

// const arr = [1,2,3,5,6,7,44];
// arr.forEach((element, index , array) =>{
//     // console.log(element);
// })

// arr.map((element) => {
//     console.log(element);
// })

// const arr1 = [1,2,3,4,5,4,6,7,];
// const arr2 = ["hello", "bye" , "day", "hi"];


// const a = arr2.filter((element) => {
//  return element.includes("day");
// })

// console.log(a);


// const arr3 = [14,2,3,4,5];
// const sum = arr3.reduce((acc, curr) => {
//     return acc + curr
   
// },10)

// console.log(sum);