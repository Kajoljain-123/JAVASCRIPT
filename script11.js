// const student ={
//     fullName: "Kajol Jain",
//     marks: 84,
//     printMarks: function(){
//         console.log("marks =", this.marks); // yha this ka mtlb studnet.marks se hai this use krk object k andr ki property ko access kr skte hai                                         
//     },
// };


// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
    // calcTax2: function(){
    //     console.log("tax rate is 20%");
    // }
   // calcTax or calcTax2 dono hi sahi tarike hai function ko likhne k but uppr vala jada dekhne ko milta hai.
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 20%"); //is function ki priority jada hogi
//     },
// };

// const karanArjun2 = {
//     salary: 50000,
// };const karanArjun3 = {
//     salary: 50000,
// };const karanArjun4 = {
//     salary: 50000,
// };
//karanArjun.__proto__= employee;
// karanArjun2.__proto__= employee;
// karanArjun3.__proto__= employee;
// karanArjun4.__proto__= employee;

// class Toyotacar{
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.myBrand=brand;
//         this.mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

    // setBrand(brand){
    //     this.brnadName=brand;
    // }
//}

// let fortuner = new Toyotacar("fortuner", 10);//yha constructor autometically invoke ho jayga
// console.log(fortuner);
//fortuner.setBrand("fortuner");
// let lexus = new Toyotacar("lexus", 12);//yha constructor autometically invoke ho jayga
// console.log(lexus);
//lexus.setBrand("lexus");




//Inheritance in JS:-

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// let obj = new Child();


    // work(){
    //     console.log("do nothing")
    // }



// class Person{
//     constructor(name){
//         console.log("hello super constructor");
//         this.species="homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("please eat");
//     }

//     sleep(){
//         console.log("please sleep its too late");
//     }
// }

// class Children extends Person{
//     constructor(name){
//         super(name);//to invoke parent class constructor
        
//     }
//     work(){
        
//         console.log("please children keep quite");
//     }
// }


// let ch2 = new Children("Kareena");




//practice question:-

// let Data ="secret information";

// class User{
    
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",Data)
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
        
//     }
//     editData(){
//         Data = "Some new value";
//     }
// }
// let student1= new User("Lakhan", "lakhan@email.com");
// let student2= new User ("Karan", "karan@email.com");
// let admin1= new Admin("admin","admin@college.in");


// // Error- Handling:-

// let a=5;
// let b=10;
// console.log("a=", a);
// console.log("b=", b);
// try{
//     console.log("a=", c);
// }catch(err){
//     console.log(err);
// }

// console.log("a+b=", a+b);
// console.log("a=", a);
// console.log("a=", a);


class parent{
    // constructor(){
    //     console.log("parent help!");
    // }
    eat(){
        console.log("plese eat");
    }
    sleep(){
        console.log("please sleep");
    }
}

class child extends parent{
    // constructor(){
    //     super();
    //     console.log('children help!');
    // }
    work(){
        super.eat();
        console.log("please child do work");
    }
}

let c1= new child();
