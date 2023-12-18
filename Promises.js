// console.log("help");
// setTimeout(function(){
//     console.log("hello there");
// },3000)

// promises

// let ans = new Promise((res,rej)=>{
//     let num = Math.ceil(Math.random()*10);

//     if(num>5){
//         return res();
//     }

//     else{
//         return rej();
//     }

// })

// ans.then(function(){
//     console.log("you are in")
// })

//     .catch(function(){
//     console.log("you are out");
// });

// let gate = new Promise((res,rej)=>{
//       return res("gate kholo");
// })

// let band =gate.then(function(data){
//     console.log(data);
//     let x = new Promise((res,rej)=>{
//         return res("gant bandkro");
//     })
//     return x;
// })

// let soo =band.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("soo jao");
//     })
// })
// soo.then(function(data){
//     console.log(data);

// })

// function fun() {
//   let x = document.body;
//   let year = new Promise((res, rej) => {
//     let age = document.getElementById("age").value;
//     age = Number(age);
//     if (age > 18) {
//       return res();
//     } else {
//       return rej();
//     }
//   });
//   year
//     .then(function () {
//       let ans = `you are in`;
//       return (document.getElementById("time").innerHTML = ans);
//     })
//     .catch(function () {
//       let button = document.createElement("button");
//       button.textContent = "sign up";
//       button.style.backgroundColor = "red";
//       button.style.padding = `20px 40px`;
//       button.id = "signup";
//       x.appendChild(button);

//         })})};

// let ticket = new Promise((res,rej)=>{
//      const isBorded = false;
//   if(isBorded){
//     res();
//   }
//   else{
//     rej();
//   }
// })
//  ticket.then(function(){
//   console.log("flight is gone");
//  })
//  .catch(function(){
//   console.log("flight is still ")
//  })
//  .finally(function(){
//   console.log("it will always excute");
//  })

// let pro = new Promise((res, rej) => {
//   setTimeout(function () {
//     console.log("hello");
//     res();
//     // res(data);
//   }, 1000);
// }).then(function () {
//   setInterval(function () {
//     console.log("its done");
//   }, 2000);
// });

let x = new Promise((res, rej) => {
  setTimeout(function () {
    let name = true;
    if (name == 0) {
      console.log("reselvo");
      res("hello there ");
    } else {
      rej("something went wrong");
    }
  }, 1000);
})
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((data2) => {
  //   setTimeout((data) => {
  //     console.log(`its not working`, data2);
  //   }, 1000);
  // }).finally(()=>{
  //   setTimeout(()=>{

  //     console.log("its working");
  //   },2000)
  // })

  async()=>{
    try{
        const response = await x;
        console.log(response);
    }
    catch(err){
          console.log(err); 
    }
  }

  // explain full java script and sync and async function / heap memory / main-side function
  
