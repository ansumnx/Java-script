let a;
let b;
let c;
document.getElementById("btn").onclick = function () {
    a = document.getElementById("number").value;
    a = Number(a);
    b = document.getElementById("second").value;
    b = Number(b);
    // for(let i=1;i<=10;i++)
    c = a * b
    document.getElementById("result").innerHTML = c;
    // console.log(c);

}