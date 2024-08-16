//  function in javasccipt
// a set of rules or statments that perform task or calculate values   and its a reusable code


// HOW TO DECLARE FUNCTION

// function sayHi(){             //  Declearing the function        // the code which will be excuted will be come in block
//     console.log("hi")
// }

function saybye(){
    console.log("bye")
}

// sayHi();    // after Declearing the function we have to call them
saybye();


//HOW TO PASS ARGUMENTS and parameter
// like this u use this function to say hi to everyone
// function hello(username){
//     console.log("say hi " + username)
// }

// hello("chris")


//PASSING TWO PARAMETER
function hello(FIRSTNAME,LASTNAME){
    console.log("say hi " + FIRSTNAME + " " + LASTNAME)
}

hello("chris", "galle")
hello("jane", "smith")
hello("billy", "chris")


const billys = 'billys'
const sally = 'sally'

hello(billys,sally)     //we can pass variable in parameter also


function card(name,age){
    console.log('your name is :' + name + ' and your age is :' + age)
}

card('mehdi', 28)

// function numberDouble(num){
//     console.log(num * 2)
// }

// numberDouble(10)

function numberDouble(num){
    return num * 2;                             // if there is return in function  and u can call that function by console because its returning value
}

// console.log(numberDouble(10))            // you call function like this and making the variable and calling that variable in console

const num = numberDouble(20)                    // or u can do like this
console.log(num)                        



// const myName = 'chris';

function sayHi(myName){
    if(!myName){
        var myName = 'bob'
    }
    console.log('hi'+ " " +myName)
}

sayHi("raza")

//   YOU CAN DEFINE A LIKE THIS ALSO

 const squareNumber = function(num){
    return num * num;
 }

 const numberAdder = function(num1,num2){
    return num1 + num2;
 }

 console.log(numberAdder(squareNumber(4),10))           // invoking function in parameter

 // by passing the string and int in function it will not change the orignal value
 //but in object and array it will change

 const myInfo ={
    name:'chris',
    age: 30
 }

 function changeAgeTo100(myObj){
    myObj.age = '100';
 }

 console.log(myInfo)
 changeAgeTo100(myInfo)
 console.log(myInfo)

 const mynumber =[1,2,3,4,5]

 function addToArray(myArray){
    myArray.push(6)
 }
 console.log(mynumber)
 addToArray(mynumber)
 console.log(mynumber)