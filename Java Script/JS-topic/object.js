// let nam ={

//     name:'anshuman',
//     age:23,
//     info:function(){
//         console.log(`my name is ${this.name}\n my age is ${this.age}`);
//     }
// };

// // const ans = Object.values(nam);
// console.log(JSON.stringify(nam))


// function Family(name,year,cast,gotra){
//     this.name = name;
//     this.year = year;
//     this.cast = cast;
//     this.gotra = gotra;
//     this.fullinformation = function(val){
//        let info = `our family ${name} is situated in ${year} and we are ${cast} and our gotra is ${gotra}`;
//        return info;
//     }
// }

// let Family1 = new Family('raguwansh',1956,'hindu','rajput');
// let Family2 = new Family('wansaj',1967,'hindu','bhumiyar');
// let Family3 = new Family('yarsaj',1989,'muslim','pathan');

// console.log(Family3.fullinformation());

// function ten (){
//     let n = 0;
//     return{
//         next : function(){
//             n +=10;
//             return{value:n , done:false};
//         }
//     }
// }

// let t = ten();

// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());


const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  person.lastName = "singh";
  console.log(person.lastName);