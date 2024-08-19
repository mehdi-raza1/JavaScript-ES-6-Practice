function Animal(name,age){
    this.name = name;
    this.age = age;
    
}

Animal.prototype.makeNoice = function(){
    console.log(`generic animal noice`)
}

function Dog(name,age,breed){
    Animal.call(this,name,age)              // way to inherit Animal
    this.breed = breed
}


//      older version to do this

Dog.prototype = Object.create(Animal.prototype)
// console.log(Dog.prototype.constructor)           // if u will check this it is invoke but on animal name now to change on dog
Dog.prototype.constructor = Dog
Dog.prototype.makeNoice = function(){               //   to reassign the function
    console.log("bark bark wooof")
}

const barky = new Dog('barky',1,'chihuahua')
console.log(barky.name)
barky.makeNoice()


//  another example

function Cat(name,age,coloration){
    Animal.call(this,name,age)
    this.coloration =  coloration
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.scratchPost = function(){
    console.log("cat has scratched the post")
}

function Kitten(name,age,coloration,litter){
    Cat.call(this,name,age,coloration)
    this.litter = litter
}

Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten
const kitty = new Cat('kitty',3,'tabby')

kitty.makeNoice()
kitty.scratchPost()

const tinyKitty = new Kitten('spot', 0.3, 'orange', 1)
console.log(tinyKitty.name)
console.log(tinyKitty.coloration)
tinyKitty.makeNoice()


// how to check if any instance of any other constructor   return true or false

console.log(tinyKitty instanceof Cat)
console.log(tinyKitty instanceof Dog)