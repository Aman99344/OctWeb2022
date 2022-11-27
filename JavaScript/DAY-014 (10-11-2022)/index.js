

// var name  = "aabc"
// const obj = {
//     name: "aman",
//     age: 21,
//     getMydetails : function () {
//         return `${this.name} ${this.age}`
//     },
//     myDetails2 : () =>{
//         return `${name} ${this.age}`
//     }
// }

// console.log(obj.myDetails2());

// obj.newkey = "newvalue";
// obj.newArr = [1,2,3];

// obj.newArr.push(4,5,6)

// obj.newObj = {key1 : "value1"}

// // obj.newObj.push(key2 , "value2")

// obj.newObj.key2 = "value2"
// console.log(obj);


const obj = {
    name: "aman",
    age: 21,
    mob : "7877979",
    address : {
        city : "patna",
        state : "Bihar",
    }

    }


// const copiedObj = Object.assign(obj)
// copiedObj.skill = "front end"
// console.log(copiedObj);

console.log(Object.keys(obj.address));