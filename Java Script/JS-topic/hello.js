/*
//java script

//how to print anything 
console.log("hey there");

//how to use alert
// alert("learning java script");  


// how to create variable 
let me = "anshuman";
let age = 18;
let student = true;
console.log(me,age,student);


//how to use document.get element........ 
document.getElementById("name").innerHTML="my name is " + me ;
document.getElementById("student").innerHTML =" i am student " + student;
document.getElementById("age").innerHTML= "my age is "+ age;


// Two ways to take userinput in js.
let username = window.prompt("what is your name\n");
console.log(username);

let username;
document.getElementById("clk").onclick = function(){
    username = document.getElementById("frm").value;
    console.log(username);
}



// Type conversion
let age= window.prompt("what is your age\n");
age = Number(age);
age += 2;
console.log("you turned" , age ,("years old this year"));

// we use typeof in console to know data type of variable
console.log(age , typeof age );

// const= a variable cant change
const A=5;
let p ;
p = window.prompt("enter the number");
p = Number(p);
let bro = A*p;
console.log(bro);


//math libarary
let b= 9.3;
let c = 5;
b= Math.abs(b);
console.log(b);

//maximum and minimum function
let maximum;
let manimum;
maximum= Math.max(b,c);
manimum= Math.min(b,c);

let a;
let b;
let c;
document.getElementById("btn").onclick = function () {
  a = document.getElementById("a").value;
  a = Number(a);
  b = document.getElementById("b").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  
  document.getElementById("lbl").innerHTML = "side c: " + c;
  
};

//diffrent number   
let x = Math.floor(Math.random() * 60) + 0;
console.log(x);

*/