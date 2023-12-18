// normal function
function multi(a,b){
    return a*b;
}

console.log(multi(2,3));


// arrow function
export let random = (a,b,c,d) => Math.max(23,45,67,45);
console.log(random());

// anomous function
document.addEventListener('click' , () => console.log("clicked"));