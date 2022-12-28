// for of
//it return values

// const arr = [1, 2, 5, 8, 9];
// for (let elements of arr) {
//   console.log(elements);
// }

//for in
//it return index

// const arr1 = [1, 8, 7, 95, 5];
// for (let elements in arr1) {
//   console.log(elements);
// }

//object

// const obj = {
//   key: "value",
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// console.log(obj);

//its return in key of obj

// for(let elements in obj){
//     console.log(obj[elements]);
// }

// const arr1 = Object.entries(obj);
// console.log(arr1);

// ======================================================

//for each

// const num = [1,2,5,7,7,8,9];
//  num.forEach((element, ind, num)=>{
//     console.log(element,ind);
//  })


// const num1 = [1,2,5,7,7,8,9];
// const newarr =[];

// num1.forEach((elem,ind)=>{
//     let sq = elem*elem;
//     newarr[ind] = sq;
// })

// console.log(newarr);

// ====================================================

//MAP

// const num1 = [1,2,5,7,7,8,9];

// const surr = num1.map((ele)=>{
//     return ele*ele;
// })

// console.log(surr);


// const num1 = [1,2,5,7,7,8,9];

// const surr = num1.map(ele=>ele*ele)
// console.log(surr);


//====================================

//filter

// const obj1 = [
//     {
//         name: "aman",
//         marks: 50,
//     },
//     {
//         name: "abc",
//         marks: 40,
//     },
//     {
//         name: "mohan",
//         marks: 42,
//     },
//     {
//         name: "raju",
//         marks: 48,
//     },
//     {
//         name: "kaju",
//         marks: 25
//     }
// ];

// console.log(obj1);

// const filtermarks = obj1.filter((e)=>{
//     if(e.marks>=42){
//         console.log(e.marks);
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(filtermarks);


// const product = [
//     {
//         product: "noodle",
//         price: 150,
//     },
//     {
//         product: "moms",
//         price: "",
//     },
//     {
//         product: "fresh_fries",
//         price: 120,
//     },
//     {
//         product: "fried_rice",
//         price: "",
//     },

//     {
//         product: "piza",
//         price: "",
//     },
//     {
//         product: "burger",
//         price: 50,
//     },
// ];

// const newList = product.filter((e,i)=>{
//     if(e.price ==""){
//      return false;
//     }
//     else{
//         return true;
//     }
// })

// console.log(newList);

//Map return whole array.
//filter return array filtered on some condition. 

