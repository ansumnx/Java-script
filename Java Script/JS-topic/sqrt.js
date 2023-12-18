let a;
let c;
document.getElementById("btn").onclick = function(){
    a=document.getElementById("first").value;
    a=Number(a);
    c=Math.sqrt(a);
    document.getElementById("third").innerHTML = "OUTPUT " + c;
}