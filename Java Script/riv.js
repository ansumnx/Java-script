// let array = [2,8,45,62,3,9];
// let max = Math.max(...array);
// let min = Math.min(...array);
// console.log(max);
// console.log(min);

// let name = [ 'anshu' , 'rahul' ,'varun'];
// let sort = name.sort().reverse();
// console.log(...sort);

// let cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   let nw = cars.sort();

//   console.log(...nw);

// let cars = ["BMW", "Volvo", "Saab", "Ford"];
// let car = ["BM", "Volo", "Sab", "For"];
// for(let i in car){
//   console.log(car);
// }
// cars.forEach(pr);

// function pr(val,ind,cars){
//   console.log(val,ind,cars);
// }

// let x = new Date ("Dec 9, 2021 22:27:00").getTime();
// console.log(x);

// function myfunction(){
//     let x = document.getElementById("num").value;
//     let p = document.getElementById("p");
//     p.innerHTML = "";
//     try{
//         if(x.trim() == "") throw "empty";
//         if(isNaN(x)) throw "enter a number";
//         x = Number(x);
//         if(x<5) throw "too low";
//         if(x>10) throw "too high";
//     }
//     catch(msg){
//         p.innerHTML = "input is " + msg ;
//     }
//     finally{
//         document.getElementById("num").value = "";
//     }

// }

// let x = 5
// delete x;
// console.log(x);

// const hello = {
//   name: "anshuman",
//   age: 22,

//   info: function () {
//     return `my name is ${this.name} and i am ${this.age} years old`;
//   },
// };

// // let info = hello.info.bind(person);
// console.log(hello.info);

// let x = 0;
// document.getElementById("btn").onclick =()=>{

//     document.getElementById('p').innerHTML = x++ ;

// }

// let name  ={
//     nam:'anshuman',
//     age:23,
//     roll:3112,
//     info(){
//       let form =  `my name is ${this.nam} and i am ${this.age} and my roll is ${this.roll}`;
//       return form;
//     }
// }

// // console.log(name)

// class student{
//     constructor(name,age,roll){
//         this.name = name;
//         this.age = age;
//         this.roll =roll;
//     }
//     info(){
//       let form =  `my name is ${this.name} and i am ${this.age} and my roll is ${this.roll}`;
//       return form;
//     }
// }

// class teacher extends student{
//     #salary ="";
//     constructor(name,age,roll,salary){
//         super(name,age,roll);
//         this.#salary = 30000;
//     }
//     sal(){
//         let x =  this.info() + ` and my salary is ${this.#salary}`
//         return x;
//     }
// }

// class principal{

// }

// Object.assign(teacher.prototype, principal);

// console.log(principal);

// let student1 = new student("anshuman",22,3112)
// let teacher1 = new teacher("shiva",39,34)

// console.log(teacher1.sal())

let name = ["anshuman", "ritik", "varun"];
name.forEach((val) => {
  console.log(val.toUpperCase());
});
