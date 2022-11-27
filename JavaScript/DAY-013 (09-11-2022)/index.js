
// // const obj = {}
// // console.log(typeof(obj));

// const obj2 ={
//     key : "value",
//     name1 : "Aman",
//     age : 22,
//     eduction : {
            
//         School : "Gurukul",
//         class : "10th",
//         Year : "2016"
        
//     },
//     arr :[1,2,3,4,5,6,7,8],

//     arrOfObj:[

//         {
//             skill : "js",
//             work : "front-end",
//         },

//         {
//             skill : "java",
//             work : "back-end",
//         },

//         {
//             skill : "html",
//             work : "markup"
//         }
//     ],

// }

// // for (let index = 0; index < obj2.arrOfObj.length; index++) {
// //     const element = obj2.arrOfObj[index];
// //     console.log(element.skill);
// // }

// // console.log(obj2.arrOfObj[0]);



const obj = {
    arrOfObjOfArray:[
        {
            arr1:[
                {
                    key1 : "value1",
                    key2 : "value2"
                }
            ],


            arr2: [
                {
                    key1 : "value3",
                    key2 : "value4"
                }
            ],
        },

        {
            arr1:[
                {
                    key1 : "value5",
                    key2 : "value6"
                }
            ],

            arr2:[
                {
                    key1 : "value7",
                    key2 : "value8"
                }
            ],
        },
    ]
}
 
  
    
     for (let index = 0; index < obj.arrOfObjOfArray.length; index++) {
        const ele = obj.arrOfObjOfArray[index];
        
        // console.log(ele);
        console.log(ele.arr1[0].key1);
     }


        