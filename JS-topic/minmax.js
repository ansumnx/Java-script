let a;
let b;
let c;
let min;
let max;
document.getElementById("btn").onclick = function(){
    a=document.getElementById("first").value;
    a=Number(a);
    b=document.getElementById("second").value;
    b=Number(b);
    c=document.getElementById("third").value;
    c=Number(c);
    min=Math.min(a,b,c);
    document.getElementById("min").innerHTML = "MIN " + min;
    max=Math.max(a,b,c);
    document.getElementById("max").innerHTML = "MAX " + max;
}