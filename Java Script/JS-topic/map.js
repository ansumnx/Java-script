/*
const store = new Map([
    ["t-shirt", 30],
    ["shirt", 10],
    ["jeans", 40],
  ]);
  
store.get("jeans");  
store.set("hat",10);
store.delete("hat");

  store.forEach((value, key) => {
    document.getElementById("store").innerHTML += `${key} $${value}<br>`
  });
  
  const cars = new Map([
    ["thar", 100000],
    ["BOLERO", 20000],
    ["OMNI", 300000],
  ]);
  
  
  cars.set("maruti",3000);
  cars.delete("maruti");
  
  
  cars.forEach(
    
    function car(key , value ) {
      document.getElementById(
        "store"
        ).innerHTML += `cars ${value} $ ${key}<br>`;
        
      }
      );
      
      */
      // map function
      let arr1 = [2,4,6,8,10];
      let sqr = arr1.map((val)=> val*val*val);
      
      console.log(sqr);
      
      let arr2 = ["harry","simon","ksi","vik"];
      let sideman = arr2.map((val) => console.log(val));
      console.log(sideman);
      
     let arr3 = ["harry","simon","ksi","vik"];
     let len = arr3.map((val) => {
      console.log(val,"len",val.length);})
      console.log(len);



      
      
