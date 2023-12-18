let a;

let b;
let c;
document.getElementById("btn").onclick = function(){
    a=document.getElementById("first").value;
    a=Number(a);
    b=document.getElementById("second").value;
    b=Number(b);
    c=a/b;
    c=parseFloat(c);
    document.getElementById("third").innerHTML= "OUTPUT " + c;
}


