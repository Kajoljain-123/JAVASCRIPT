
// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 2000);  //timeout 2s=2000ms

// setTimeout(() =>{
//     console.log("hello");
// }, 2000); //timeout

// Asynchoronous function:-


// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("hello");
// }, 2000);

// console.log("three");
// console.log("four");

// callbacks:-

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b, callbacks){
//     callbacks(a,b);
// }

// calculator(1,2,sum); // yha function bina bracket k pass krege

// function getData(dataId){ //2s
//     setTimeout(() =>{
//         console.log("data", dataId);
//     }, 2000);
// }


// function hello(){
//     console.log("hello Kajol");
// };

// setTimeout(hello, 3000);

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumcallback){
//     sumcallback(a,b);
// }

// calculator(1,2, (a,b)=>{
//     console.log(a+b);
// })

//calculator(1,2,sum);

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// callback hell
// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3)
//     });
// });


// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("some error");
    // resolve("success");
// });

// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         //reject("network error");
//     });
// }

// let promise= getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// function asyncFunc1(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success")
//         },4000);
//     });

// }

// function asyncFunc2(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success")
//         },4000);
//     });

// }
// promise chaning:- 1st method ese bhi likh skte hai
// console.log("fetching data1....")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{});
// });

// promise chaining:- 2nd method ese bhi likh skte hai
// console.log("fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2....");
//     asyncFunc2().then((res)=>{});
// });


// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         },5000)
//     })
// }

// promise chaining:-
 //1st method
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     });
// }
// );
//2nd method
// let p1= getData(1);
// p1.then((res)=>{
//     console.log(res);
//     let p2=getData(2);
//     p2.then();
// });
//promise chain:-

//3rd method:-
// getData(1)
//     .then((res)=>{
//     return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//     console.log(res);
// });


// async function hello(){
//     console.log("Hello Kajol");
// }


// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     })
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }


function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}

//async-await:-

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
// }

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
})();