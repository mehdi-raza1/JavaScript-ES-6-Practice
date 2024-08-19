
// long way method
// function Animal(name,age,breed){
//     const obj={};
//     obj.name= name
//     obj.age = age
//     obj.breed = breed
//     return obj;

// }

// short way method

function Animal(name,age,breed){
    this.name= name
    this.age = age
    this.breed = breed
    // this.sayBreed = function(){      
    //     console.log(`My brees is : ${this.breed}`)
    // }
     
}

Animal.prototype.sayBreed = function (){            // you can methods prototypes objects instead and each of the object has this method
    console.log(`I am a ${this.breed}`)
}

const  dog1 = new Animal('spike', 3, 'labrador')
const  dog2 = new Animal('spot', 2, 'Golden Retriever')

console.log(dog1.name)
dog1.sayBreed()
dog2.sayBreed()
console.log(Animal.prototype.hasOwnProperty("sayBreed"))
console.log(Animal.hasOwnProperty("sayBreed"))
console.log(dog2.hasOwnProperty("sayBreed"))
console.log(dog2)


Animal.prototype.sayBreed = function(){             /// it will update now the function prototype
    console.log(`${this.breed} is one the coolest`)
}

dog2.sayBreed()

Object.prototype.sayHello = function(){             // strongly discourage  but it will come on every obj   same as an array
    console.log("hellooo!")
}

dog1.sayHello()