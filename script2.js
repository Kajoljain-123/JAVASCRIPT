//Arithmetic operators

// let a = 5;
// let b = 6;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = " , a+b);
// console.log("a - b = " , a-b);
// console.log("a * b = " , a*b);
// console.log("a / b = " , a/b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); //5^6

//unary operator:-
// let a = 5;
// let b = 6;

//console.log("a = ", a, "& b = ", b);
// a++;
// a=a+1;
// a--;
// a=a-1;
// console.log("a = ", a);

//console.log("a++ =", a++);
//(yha 5 print hoga)pehle purani value use hogi print niche vali line me hogi bdli hui value
// console.log("a=", a); 
//(yha 6 print hoga) yha print hogi

//let a =5;
//let b=2;

//a += 4; 
// a= a+4;
//console.log("a=", a);
//a -= 4; // a=a-4;
//console.log("a=", a);

// Comparison Operators

// let a=5;
// let b=4;
// console.log("a !=b", a != b);
// console.log("a == b", a == b);

// conditional statements

// let age = 28;
// if (age >= 18){
//     console.log("You Can Vote");
// }

// if (age <18){
//     console.log("You Cannot Vote");
// }

// let mode ="dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode ==="light"){
//     color ="white";
// }
// console.log(color);

// let mode ="light";
// let color;

// if(mode === "dark"){
//     color="black";
// }
// else{
//     color ="white";
// }
// console.log(color);

// let name = prompt("hello!");
// console.log(name);

// let num = prompt("Enter a number:");
// if(num%5 === 0){
//     console.log(num, "is a munltiple of 5");
// }
// else{
//     console.log(num, "is not a multiple of 5");
// }

// let score = prompt("enter your score (0-100)");
// let grade;
// if(score>=90 && score<=100){
//     grade ="A";
// }else if(score >= 70 && score <= 89){
//     grade ="B";
// }else if(score >=60 && score <= 69){
//     grade="C";
// }else if(score >=50 && score <=59){
//     grade= "D";
// }else if(score >= 0 && score <= 49){
//     grade ="F";
// }

// console.log("according to your scores, your grade was: ", grade);


// for(let count=1; count<=5; count++){
//     console.log("hello Kajol");
// }

//Calculate sum of 1 to 100

// let sum=0;
// let n=100;
// for(let i =1 ; i <= n; i++){
//    sum=sum+i; 
// }
// console.log("sum=", sum);
// console.log("loop has ended");

//print 1 to 5
// for(let i=1; i<=5; i++){
//     console.log("i=",i);
// }

// while loop

// let i=1;
// while(i<=10){
//     console.log("my sweetiee....");
//     i++;
// }

// do-while loop

// let i=1;
// do{
//     console.log("Apna COllege");
//     i++;
// }while(i<=10);

//for-of loop
// let str ="JavaScript";

// let size=0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("string size=", size);

//for in loop
// let student={
//     fullname: "Ayush Jain",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for (let key in student){
//     console.log("Key=", key, "value=", student[key]);
// }

// practice set
// print all even no till 100

// for(let num=0; num<=100; num++){
//     if(num%2 !== 0){
//     console.log("num=",num);
//     }
// }
// let gameNum=25;
// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//     userNum= prompt("you entered wrong number, guess again:")
// }
// console.log("Congrulation, you Win!, you entered the right number");

//string

// let str="Hello Miss Kajol";
// console.log("str:", str);

// let  str2="What are you doing?"
// console.log(str2[0]);

//Template Literals

// let specialString= `This is a template literal`;
// console.log(typeof specialString);

// let obj={
//     item: "Pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

// console.log("Kajol\nJain");
// console.log("KAJOL\tJAIN");

// let str = "Apna\tCollege";//12 
// console.log(str.length);


//let str = "ApnaCollege";

// let str = "0123456";
// console.log(str.slice(1,3));

// practice set:-

//let fullName=prompt("enter your fullName without spaces");
//let str1="@";
//let username= str1.concat(fullName);
//let username= "@" + fullName + fullName.length;
//console.log(username);
