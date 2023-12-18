
/* it will also work
let
a
;
a
    =
    7;
console.log
    (
        a
    )
    ;


let y = 4, c = "3", z = "4"
console.log(y + c + z);
output = 434;

LET x; undifined datatype;

let x = typeof 10; This data type help us to know data type
${ 'hello world' }; use in template

4 === 4 // for check any value // it direct check the datatype
4 == 4 is kind of wrong way // it check the number only

let a = "anshuman";
let b = 3112;
const name = window.prompt("enter your name");
const roll = window.prompt("enter your roll number");

// IF-ELSE

if (a == name && b == roll) {
    alert("welcome back");
} else if (a != name && b != roll) {
    alert("please enter correct roll number");
} else {
    alert(callback());
}

alert(user ?? "guest user");
help with undifined

// WHILE LOOP
let i = 1;
while (i <= 10) {
    console.log('anshu');
    i += 3;
}

//FOR LOOP

for (var i = 1; i <= 3; i++) {
    console.log('ritik');
    document.write("help <br>")
}
let i = 1;
for (i = 1; i <= 10; i++) {
    let b = 5 * i;
    console.log("5*", i, "=", b);
}
let i = 1;
let count = 0;
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        count += i;
    }
}
console.log(count);

// NESTED LOOP
anshu: for (let i = 1; i <= 10; i++) {
    document.write("hii");
    for (let j = 1; j <= i; j++) {
        document.write("<br>");
        if (j == 1) {
            break anshu;
        }
        man: for (let l = 1; l <= j; l++) {
            document.write("bro");
        }
    }
}

//WAYS TO PRINT IN JS

window.prompt("enter your age", "age"); if cancel == null
alert("help");
confirm("help");

// TYPE CONVERSION

let a = null - "3.8"; // -3.8
let b = null * "3.8";  //nan
let c = "5" * "8"; //40
let d = 5 + "4"; //54
alert(a);

let a = -9;  // true
let g = 0;  // false
let b = Boolean(a);
console.log(b);

let c = "anshu"; //true
let e = "";  // false
let d = Boolean(c);
console.log(d);

let a = "anshu";
let b = a;
console.log(b);

// ARRAY

let name = ["anshu", "raj", 7, "singh", 89];
let nam = new Array("anshu", 1, "singh", 78);

name[2] = "kumar";

for (let i = 0; i <= name.length; i++) {
    console.log(name[i]);
}

let a = ["anshu", "man", "raj"];

a.push("singh"); add in last
a.unshift("ritik"); add in start
a.shift(""); remove from start
a.pop(); remove from last
a.splice(1, 1); // remove from middle
a.lenght() = 0;
Array.isArray(a); to check a type
a.split(); a.join('-')
for (let i in a)

    console.log(a[i]);

a.forEach(print);
function print(a) {
    console.log(a);
}

// FUNCTION
function multi(a) //PRAMETER
{
    for (let i = 1; i <= 10; i++) {
        document.write(`${a} x ${i} = ${a * i} <br> `);
    }
}

multi(9);// ARGUMENT


function multi(){
    if (arguments.length==0){
        document.write("enter number");
    }
    else
    {
        let value = 1;
        for(let i=0 ; i<arguments.length ; i++){
            value = value * arguments[i];
        }
        document.write(value);
    }
}

multi(7,8);

let help = function(){
    document.write("help us !!");
}

setTimeout(help,8000);

//instant invoked function
(function (){
    console.log("anshu");
})();

// objects

let help = {
    name : "anshuman",
    age : 15,
    roll:3112,

    info(){
        console.log("i am coder");
    }
};

help.password = 1562;
// delete help.password;
console.log(help);
console.log(help.info())

// for(let i in help){
//     console.log(help[i]);
// }


// math object

let a = 4.8;
let b = Math.trunc(a);
console.log(b); // output 4

// math random
// let a = Math.round(Math.random() * 10 +1);
// genrate number between 40 - 55
let a = Math.round(Math.random() * (55 - 30) + 30);
console.log(a);

 //DATE OBJECT

let time = new Date('26 MARCH , 2002 , 9:45');
time.setFullYear(2000); // to set
console.log(time.getFullYear()); // to get


let time = new Date ('january 1, 2004 , 9:29:30');
//  how to date after 50 days ;
time.setDate(time.getDate() + 50) ;
console.log(time);

let time = new Date();
time.setFullYear(2008,11,2);
console.log(time);

// setter in js

let info = {
    name: "ANSHUMAN",
    age: 22,

    set l(n) {
    this.len = n.length;
},
};

info.l = "anshuman singh rajput";
console.log(info);

//constracter function js

function Student  (n,a,c,r){
    this.name = n,
    this.age = a,
    this.class = c,
    this.roll = r;
}


Student.prototype.address = "motihari"; // to add something in constracter

let info = new Student("anshuman",22,12,3112);
// info.address = "motihari";
console.log(info);

// nested object

let help ={
    me:'anshuman',
    her:'smriti',
    contact:{
        me:8757403751,
        her:923764901,
        relation:{
            me:"friend",
            her:"bestfriend",
        }
    }
}

console.log(help.contact.her);


// hoisting
x = 9;
console.log(x); // error
let x ; // let/const has not difined;

y = 9;
console.log(y); // 9
var y ; // bcoz var == undifined ;


"use strict"; // if you write this it will help to not get bug in code later and fix my code imidiatly.

x = 9;
console.log(x);

// Three ways to pass in function

// 1.normal way
function help(){
    console.log("please help me");
}
help();

// 2. normal way
function help(msg){
    console.log(msg);
}
help("please help me");

// 3. default perameter

function help(m = "please help me"){
    console.log(m);
}
help();
// 4.rest parameter

function sum(...a){

   for(let i =0 ;i<a.length;i++)
   {
       console.log(a[i]);

    }
}

sum("anshu","dilip","chunu","vivek")

// spread operator

let ray = [1,2,3,4,5,7,8];
console.log(...ray);

let ad =[7,3,2,1,...ray];
console.log(...ad)

// For..of

function name(...n){

    for(let i of n){
        console.log(...n);
    }

}

*name("anshu","ritik","varun");

// array destructiring

// let book = ['helen',300,"$199"];
// console.log(book[2]);

//nested array
let name = [
    ["anshu", 23],
    ["ayush", 13],
    ["prince", 24],
    ["harry", 19],
    ["vinod", 24],
];

//array destructring
let [person1, person2, person3, person4, person5] = name;

console.log(...person3);


function dear(){

    return ["anshu","vinod","ritik"];
}
// let name = dear();

let[name,name2,name3] = dear();

console.log(name3);

// Object Destructuring


let store = {
    name:'laper',
    year:2023,
};

let{name:brand,year,b_a="submangill"} = store;

console.log(b_a)

//module

import { x } from "./mod.js";

console.log(x);

// array function

// let sum = ()=>{return 4+5};
// console.log(sum());

// let sum = (a,b)=>{
    //     return a+b;
    // }
    // console.log(sum(3,4));

    // let sum = (a,b)=> a+b;
    // console.log(sum(5,7));

    // let sqr = a => 2*a;
    // console.log(sqr(4));

    let rand = () =>{
        return Math.floor(Math.random() *4)+1;}


        console.log(rand());


        // call back function



        function sub (a,b){
            console.log("hello");

        }

        function sum (a,b,subs){
            console.log(a+b);
            subs();
        }

        sum(3,7,sub);

        // Map function

        let two =[2,4,6,8,10];

        // let sqr = two.map(val => val*2);
        let sqr = two.map(function(val){
            return val *3;
        })

        console.log(sqr);

        // Filter function

        let arr = [3,8,15,17,9,11];
        // let small = arr.filter(function(val){
            //     if(val <= 10){
                //         return val;
                //     }

                // })
                let small = arr.filter( val => val <= 10);
                console.log(small)

                let sch = [
                    {
    name: "anshuman singh",
    age: 23,
  },
  {
      name: "anshuman kumar",
      age: 21,
    },
    {
        name: "anshuman yadav",
        age: 19,
    },
  {
    name: "anshuman raj",
    age: 19,
},
];

let final = sch.filter(function(val){
    if ( val.age == 19)
    {
        console.log(val.name);
    }
})


//cookies

document.cookie = "item = bike";

// localestorage
localstorage.setItem('firstname','vishwajeet');
localStorage.setItem('palce','delhi');
localStorage.getItem('place');
localStorage.removeItem("firstname");

// sessionstorage
sessionStorage.setItem('firstname','vishwajeet');
sessionStorage.setItem('palce','delhi');
sessionStorage.getItem('place');
sessionStorage.removeItem("firstname");


//  JSON  
// - JAVA SCRIPT OBJECT NOTATION
// - to transfer or get data
// - used for api
// - language independent - it used with any language

// JSON store data
// Json get data
// JSON send data -- json stringify


// JSON store data
let data = `{
    "name": "anshuman",
    "age": 21,
    "student": true,
    "password": null,
    "lang": [
        "java",
        "html",
        "css"
    ],
    "info": {
        "city": "bihar",
        "pincode": 845417
    }
}`;

// Json get data
let newdata = JSON.parse(data);

console.log(data);
console.log(newdata.age);
console.log(newdata['info']['city']);

// JSON send data

let data = {
    name:"anshuman",
    age:21
}

let jdata = JSON.stringify(data);

console.log(jdata);

*/
