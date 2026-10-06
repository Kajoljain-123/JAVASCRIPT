// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);
// console.log(document.head);
// console.dir(document.body.childNodes[1]);
// let button = document.getElementById("myId");
// console.dir(button);
// console.log(button);

// let headings= document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let parahs= document.getElementsByTagName("p");
// console.dir(parahs);

// let firstElements=document.querySelector("p");
// console.dir(firstElements);

// let allEl= document.querySelectorAll("p");
// console.dir(allEl);

// let firstEl = document.querySelector(".myClass");//1st element
// console.dir(firstEl);

// let allElement= document.querySelectorAll(".myClass");
// console.dir(allElement);

// let firstEl= document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);


// let div = document.querySelector("div");
// console.dir(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText+ " from Apna College student";
// console.dir(h2.innerText);


let divs = document.querySelectorAll(".box");
//console.log(divs[0]);

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

//divs[0].innerText = "new unique value 1";