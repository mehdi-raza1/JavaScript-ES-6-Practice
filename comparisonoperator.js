
// ==  check the values
// === check the values and datatypes


const shouldSayhi = true

if(shouldSayhi === true){
    console.log("hi there")
}

const numberFive = 5;
console.log(typeof numberFive)

const stringFive = "5"
console.log(typeof stringFive)

console.log(numberFive === stringFive)  // it will return false



console.log(numberFive == stringFive)  // it will return true  because not checking the data type

// for conversion of stringnumber into number

const fourNumber = 4
const fourString = "4"

console.log(fourNumber === parseInt(fourString))


// const myArray = [1,2,3]                  // output will be false
// const myOtherArray = [1,2,3]

// console.log(myArray === myOtherArray)




// const myArray = [1,2,3]                  
// const myOtherArray = myArray                 // ths will be true

// console.log(myArray === myOtherArray)


const myObj = {
    name : 'chris'
}
// const myOtherObj = {
//     name : 'chris'
// }
const myOtherObj = myObj

console.log(myObj==myOtherObj)
console.log(myObj===myOtherObj)


const myFirstNumber = 120
const mySecondNumber = 123

if(myFirstNumber>mySecondNumber){    // if the condition is true it moves to next part
    console.log("hi there")
}

const myNumber = 125;
const myOtherNumber = 125
if(myNumber>= myOtherNumber){
    console.log("you can purchase item from this")
}

const bankAccountBalance = 123;
const CostOfItem =122;
const tax = 0.50;
 
if(bankAccountBalance<CostOfItem + tax){
    console.log("you cannot purchase this item!")
}

console.log(bankAccountBalance !== CostOfItem)   //  !== its mean sNot Equal to