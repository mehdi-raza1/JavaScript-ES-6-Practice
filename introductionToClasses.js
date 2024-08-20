//  Classes in E6 are just syntactical sugar over javascript
// existing prototye-based inheritance
// simple, clean syntax to create objects and take care of inheritance 


//  PRE-E6 WAY:
//  old way to inheritance 

// function Person(name,age){
//     this.name = name
//     this.age=   age
// }

// Person.prototype.greeting = function(){
//     console.log("Greeting :D")
// }

// function Employee(name,age,role){
//     Person.call(this,name,age)
//     this.role = role
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;


// const bill = new Employee("bill", 42, "janitor")

// bill.greeting()


//       NEW WAY TODO
//       Class Method 
//       CLASSESS ARE NOT HOISTED



class Person{   
    constructor(name,age){
        this.name = name 
        this.age = age
    }

    greeting(){
        console.log('classes greeting')
    }

}

const bob = new Person("Bob",30)
console.log(bob)
bob.greeting()

Person.prototype.greeting= function(){                  //  WE CAN CHANGE OUR METHODS ALSO LIKE THIS
    console.log("Now i can say something")
}
const jane = new Person("jane",15)
console.log(jane)
jane.greeting()




// const Person = class {
//     constructor (name,age){
//         this.name = name
//         this.age = age
//     }
// }

// const bill = new Person("bill",20)
// console.log(bill)