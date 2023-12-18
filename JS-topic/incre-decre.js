let num = 0;
let reset =0;

document.getElementById("frst").onclick = function(){
    num=Number(num);
    num++;
    document.getElementById("pro").innerHTML = num;
}
document.getElementById("scnd").onclick = function(){
    document.getElementById("pro").innerHTML = reset;
}
document.getElementById("trd").onclick = function(){
    num=Number(num);
    num--;
    document.getElementById("pro").innerHTML = num;
}