/*  object orianted programing

1.object
2.class
3.inherit


four pillar of oops
1.encapsulation -- combaing all data and member function in one eg; class
2.abstraction -- function is working but you dont need to worry / only showing important thing
3.inheritence -- copy one class to another without writing same code agian
4.pollymors ---  creating same function name but they do different work


*/

// proto type


function Person(n,a){
    this.name = n;
    this.age = a;

}

function Animal  (n){
    this.do = n;

}


Person.prototype.info = ()=> console.log(this.name + this.age);
let human = new Person ("anshuman" , 23);

Animal.prototype.in = (n) => console.log(this.do);
let hum = new Animal("eat") ;


Person.prototype.__proto__ = Object.create(Animal.prototype);


console.log(human)
console.log(human.in())





