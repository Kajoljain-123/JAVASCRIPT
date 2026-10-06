// function myFunction(){
//     console.log("Welcome to Apna College!");
//     console.log("We are learning JS:");
// }
// myFunction();
// myFunction();

// function myFriend(msg){//parameter-input
//     console.log(msg)
// }
// myFriend("I Love You");//argument

//function --> 2 numbers, sum
// function sum(a,b){
//     console.log(a+b);
// }

// function sum(x,y){
//     s=x+y;
//     return s;
// }
//  let val= sum(4,5);
//  console.log(val);

 //arrow function

 // sum function
//  function sum(a,b){
//     return a+b;
//  }


//  const arrowsum=(a,b)=>{
//     console.log(a+b);
//  }

//  //multiply function
//  function mul(a,b){
//     return a*b;
//  }

//  const arrowmul=(a,b)=>{
//     console.log(a*b);
// }

// const printHello= () =>{
//     console.log("Hello Kajol");
// }

// prctice set
// function countVowels(str){

//     let count=0;
//     for(const char of str){
//         if(char === "a" || 
//            char === "e" || 
//             char ==="i" || 
//             char ==="o" || 
//             char === "u"||
//             char === "A" ||
//             char === "E" ||
//             char === "I" ||
//             char === "O" ||
//             char === "U") 
//             {
//             count++;
//         }
//     }
//     console.log(count);
// }

// practice set

// const countVow = (str) => {
//     let count=0;
//     for(const char of str){
//         if(char === "a" || 
//            char === "e" || 
//             char ==="i" || 
//             char ==="o" || 
//             char === "u"||
//             char === "A" ||
//             char === "E" ||
//             char === "I" ||
//             char === "O" ||
//             char === "U") 
//             {
//             count++;
//         }
//     }
//     console.log(count);
    
// }

// function abc(){
//     console.log("hello!");
// }
// function myfunc(abc){
//     return abc;
// }

//let arr=[1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

//by arrow function

// arr.forEach((val)=>{
//     console.log(val);
// });

// let arr1=["Kajol", "Shreya", "Tammana","Kareena"];

// arr1.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// let arr2 = ["Kajol", "Delhi", "Kavita", "Agra"];

// arr2.forEach((val,idx,arr2)=>{
//     console.log(val.toUpperCase(), idx, arr2);
// });

//practice set

// let array=[56, 89, 38];

// array.forEach((num)=>{
//     console.log(`${num} = ${num*num}`);
// }); 

// let nums = [67,52, 39];

// let calSquare=(num1) =>{
//     console.log(`${num1} = ${num1*num1}`);
// }

// nums.forEach(calSquare);


//let nums=[67,89,90,45];

// nums.map((val)=>{
//     console.log(val);
// });

//let newArr=nums.map((val)=>{
    
    //console.log(`${val} = ${val*val}`);
    //return val*val;
// });

// console.log(newArr);

//let arr=[4,7,8,0,12];

// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);

// reduce function

// let output=arr.reduce((pre, curr)=>{
//     return pre+curr;
// });
// console.log(output);

// let output=arr.reduce((pre, curr)=>{
//     return pre>curr ? pre : curr;
// });
// console.log(output);

// let marks=[98,67,45,101,167,200,35];

// let newArr=marks.filter((val)=>{
//     return val>90;
// });
// console.log(newArr); 

let n = prompt("enter a number : ");

let arr =[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;  // 1[0], 2[1], 3[2], 4[3]
}

console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum = ", sum);

let factorial = arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial=", factorial);