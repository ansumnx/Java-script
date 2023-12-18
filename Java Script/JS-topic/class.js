// creating a class
class School {
    //creating a constructor function
  constructor(n, s, y) {
    this.name = n;
    this.student = s; // public property
    this.year = y;
  }

  // creating a normal function/method
  info() {
    console.log(
      "School name: " +
        this.name +
        " Total student: " +
        this.s +
        " Year of opening: " +
        this.year
    );
  }
  // creating an static funtion
  static inform() {
    console.log(
      "you can not call static funtion with object / u call it with  class name"
    );
  }
}

// creating a second class and conecting with first class
class School2 extends School {
    #money ="";  //private property
    constructor(n,s,y,m){
        super(n,s,y,m);
        this.#money = 100000; // private property

    }



add(){
    super.info(); // calling function from first class
    console.log("welcome");
}



}

class school3 extends School2{

}




// creating an object for first class
let sch = new School("vidya vihar residential school", 3098, 2006);

// creting an object for second class
let sch2 = new School2("jeewan public school", 2078, 2008);

let sch3 = new school3;

// calling function/ method with the help of object 
//sch2.info();

//sch.inform() ; // you can not
 // you can call

//printing it
console.log(sch2. money);
 

// mixing object
// it used to inherit more then 2 class

// Object.assign(sch3.prototype , method );
// Object.assign(sch.prototypr , method);
