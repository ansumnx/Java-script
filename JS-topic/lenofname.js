let a;
let len;
document.getElementById("btn").onclick = function () {
  a = document.getElementById("first").value;
  len = a.length;
  len = Number(len);
  document.getElementById("len").innerHTML = "length of your name " + len;
};
