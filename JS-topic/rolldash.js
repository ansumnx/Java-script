let roll;
 document.getElementById("btn").onclick =function()
{
    roll=Math.floor(Math.random() * 10)+1;
    document.getElementById("pro").innerHTML = roll;
}