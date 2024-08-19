//  Object Oriented Programming


/*
    --  oop: basic idea is used to objects to represent real world things.
            objecrts have own properties and functon methods 
    --  object can contain data and other code  to represent info about you what are you are trying to model 
    --  Data / method inside the object is encapsulated
    -- in classic oop, class is define, then , when an instance of that class is created allthe propertiesand methods are coopied over  to the instance
    -- javascript is dynamic and doesnot provide a traditional class implementation per se.
    -- javascript inheritance is protoype
    -- EACH OBJECT HAS A PRIVATE PROPERTY CALLED THE PROTOTYPE
    -- THE PROTOTYPE CAN HAVE A prototype of its own 
    -- Nearly all objects in javascript are instance of object which sits on top of the prototype chain
    -- the prototype value is an object
    -- Think of it as a bucket to store properties and methods
    -- prototype has a template object and can have prototype of its own
    -- the prototype properties is where inherited members are defined
*/


// PRETEND THIS IS A CLASS

// function ship(){
//     this.floats = true;
//     this.material="steel"
//     this.whatami = function () {
//         console.log('i am made of: '+ this.material)
//     }
// }

// const myShip = new ship()
// myShip.whatami()

// console.log(myShip.floats)


//  CLASSES

// simple way of inheritance

const name1 = {
    name:'billy',
    age:16,
    sayName:function(){
        console.log(`My name is ${this.name}`)
    }
}


const name2 = Object.create(name1)
name2.name = 'jane Doe'
name2.sayName();

const name3 = Object.create(name1)
name3.name = 'chris'
name3.sayName();