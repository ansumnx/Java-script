let a;
document.getElementById("btn").onclick =function(){
    a=document.getElementById("select").value;

    document.getElementById("renark").innerHTML = "you voted for " + a;
}