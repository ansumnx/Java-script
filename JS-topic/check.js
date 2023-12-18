document.getElementById("btn").onclick = function () {
  const a = document.getElementById("bjp");

  const b = document.getElementById("congress");

  const c = document.getElementById("rjd");
  const d = document.getElementById("jdu");

  if (a.checked) {
    document.getElementById("msg").innerHTML = "you are voted for " + a;
  } else if (b.checked) {
    document.getElementById("msg").innerHTML = "you are voted for " + b;
  } else if (c.checked) {
    document.getElementById("msg").innerHTML = "you are voted for " + c;
  } else if (d.checked) {
    document.getElementById("msg").innerHTML = "you are voted for " + d;
  } else {
    document.getElementById("msg").innerHTML = " please vote first ";
  }
};
