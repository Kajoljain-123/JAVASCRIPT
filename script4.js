// let marks=[45, 56, 8, 98, 35, 27, 10];

// marks[0]=66;
// console.log(marks);
// console.log(marks.length);


//practice set
//1st method

// let heros=["ironman", "thor", "hulk", "spiderman", "antman"];
// for(let idx=0; idx <heros.length; idx++){
//     console.log(heros[idx]);
// }
//2nd method
// let heros=["ironman", "thor", "hulk", "spiderman", "antman"];
// for(let idx=1; idx <=heros.length; idx++){
//     console.log(heros[idx-1]);
// }



//for-of loop
let heros=["ironman", "thor", "hulk", "spiderman", "antman"];
for(let hero of heros){
    console.log(hero);
}



// practice set 
let marks=[78,76, 98, 20, 10];
let sum=0;
for(let val of marks){
    sum += val;//sum=sum+val
}
let avg=sum/marks.length;
console.log(`avg. marks of the class = ${avg}`);



// practice question
//1st method
// let items=[240, 500, 400, 300, 900];
// let idx= 0;
// for(let val of items){
    //console.log(`value of at index ${idx} = ${val}`);
//     let offer = val/10;
//     items[idx]=items[idx]-offer;
//     console.log(`value after of offer = ${items[idx]}`)
//     idx++;
// }
// 2nd method
let items=[240, 500, 400, 300, 900];

for(let i=0; i<items.length; i++){
    let offer=items[i]/10;
    items[i] -= offer;// items[i] = item[i]-offer;
    //console.log(`value after offer ${items[i]}`)
}
console.log(items);


// Array methods:-
let foodItems = ["potato", "lime", "Apple", "Grapes"];
foodItems.push("mango", "paneer");
console.log(foodItems);
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

console.log(foodItems);
console.log(foodItems.toString());

let num=[98, 46, 78];
console.log(num);
console.log(num.toString());

//let marvelheroes=["thor", "spiderman","ironman"];
//marvelheroes.unshift("antman");
// let val=marvelheroes.shift();
// console.log("deleted", val);
// let dcheroes=["superman", "batman"];
// let indianheros=["krish", "Kapoors"];
// let heroes=marvelheroes.concat(dcheroes, indianheros);
//console.log(heroes);
// for(let hero of heroes){
//     console.log(hero);
// }

let marvelHeroes=["thor", "spiderman", "ironman", "antman", "Dr.Stange"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));

let arr= [1,2, 3, 4, 5, 6, 7];
//arr.splice(2, 2,101,102);

//add element
//arr.splice(2,0,101,103);

//delete element
//arr.splice(3,1);

//replace element
arr.splice(3,1,101);

let companies=["bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"];
//companies.shift();
//companies.splice(2,1,"Ola");
companies.push("Amazon");
