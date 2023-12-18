let a= 20;
let b= 20;
let c= 20;
let d= 20;
 
console.log(sum(a,b,c,d));

function sum(...numbers){
    add=0;
    for(let number of numbers){
        add=add+number;
    }
    return add;
}