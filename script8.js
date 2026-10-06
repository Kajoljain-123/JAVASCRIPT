// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked-handler1");   
// });
// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked-handler2");
// });
// const handler3=()=>{
//     console.log("button1 was clicked-handler3");
// }
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked-handler4");   
// });
// btn1.removeEventListener("click", handler3)
// btn1.onclick = (e) =>{

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
    // console.log("btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);
//};

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("you are inside div \nYou are a pure soul:) \n this is not your fault \n you are a good person!");
// };

let modeBtn1 = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode ="light";//dark

modeBtn1.addEventListener("click", () => {
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        //document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});

