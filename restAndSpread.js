//   Spread Syntax

// -- can be used in places where (eg) functions expect multiple arguments,multiple elements or multiple variables


function spreadFunction(...multipleArgs){
    console.log(multipleArgs)
}


// spreadFunction(1,2,true,"hi","hey")


const myArray = [1,2,3,4]
const mySecondArray = [5,6,7,8]
const mythirdArray = [...myArray,...mySecondArray]
// console.log(...myArray)

// const newone = mySecondArray.concat(myArray)

// mySecondArray.push(myArray)

// console.log(newone)

console.log(mythirdArray)

// Alternative to function.prototpe.apply 

function sayHello(x,y,z){
    console.log(`hello ${x}, ${y}, ${z}`)
}

const helloArray = ['bob','jane','peter']

// sayHello.apply(null,helloArray)

// spread syntax

sayHello(...helloArray)


// const arr1= [100,200,300,400]
// const arr2= [500,600,700,800]

// arr1.push.apply(arr1,arr2)


// const arr1= [10,20,30,40]
// const arr2= [50,60,70,80]

// arr1.push(...arr2)
// console.log(arr1)

const arr1= ["jelly beans"]
const arr2= ["donuts"]
const arr3= ["pie"]

const newarr = arr1.concat(arr2,arr3)
console.log(newarr)


//  REST OPERATOR

function hasManyArgs(...allArgs){
    for(const prop of allArgs){
        console.log(prop + 10)
    }
}

hasManyArgs(1,100,10,20,500)