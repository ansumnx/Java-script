let a;
let b;
let m=400;
document.getElementById("btn").onclick = function() {
    a=document.getElementById("name").value;
    b=document.getElementById("marks").value;
    b=Number(b);
    if(m<=b)
    {
        document.getElementById("remark").innerHTML="you are selected " + a;
       
    }
    else{
        document.getElementById("remark").innerHTML=  "you are not selected " + a;
        
    }  
}