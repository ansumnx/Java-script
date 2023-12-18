let a;

document.getElementById("btn").onclick = function () {
  a = document.getElementById("marks").value;
  a = Number(a);
  switch (a) {
    case 500:
      document.getElementById("renark").innerHTML = "congrats you get GRADE A";
      break;
    case 400:
      document.getElementById("renark").innerHTML = "congrats you get GRADE B";
      break;
    case 300:
      document.getElementById("renark").innerHTML =
        "Need improvement you get GRADE C";
      break;
    case 200:
      document.getElementById("renark").innerHTML =
        "Need improvement you get GRADE D";
      break;
    case 100:
      document.getElementById("renark").innerHTML = "better luck next time";
      break;

    default:
      document.getElementById("renark").innerHTML =
        "please enter a valid number ";
  }
};
