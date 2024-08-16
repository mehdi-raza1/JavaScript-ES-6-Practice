// VARIABLE DEFINE BY VAR
// TO ASSIGN ANY DATA INTO VARIABLE
// IT CAN STORE OF ANY TYPE OF DATA
// U CANT ASSIGN ANY VARIABLE NAME NY ANY RESERVED KEYWORD
// U CANT ASSIGN ANY VARIABLE NAME BY THE NUMBER 123  IT WILL GIVE AN ERROR  BUT U CAN PERFORM LIKE THIS VAR = ABC12

var myFirstName = "mehdi";
var myLastName = "raza";

console.log(myFirstName);
console.log(myLastName);

var anyNumber = 5;
var secondumber = 50.15;

console.log(anyNumber);
console.log(secondumber);

var myArray = [1, 2, 3, 4, 5];

console.log(myArray);

var myObj = {
  name: "mehdi",
  age: 50,
};

console.log(myObj);

// U CAN CHECK THE TYPE OF ANY VARIABLE MY TYPE OF DATA IS STORED INIT

console.log(typeof myFirstname);
console.log(typeof anyNumber);
console.log(typeof myArray);
console.log(typeof myObj);

var myFirstName = "mehdi";
function sayhello() {
  console.log("hello" + " " + myFirstName);
}

sayhello();

var myName = "mehdi";
// myName = 'jane'                 // TO REASSIGNED VALUE  AND WE CAN TO NUMBER ASLO
// myName = 50
function sayHi() {
  myName = "jessica"; //  WE CAN REASSIGNED VARIABLE VALUE IN FUNCTION ALSO
  console.log("hi" + " " + myName);
}

sayHi();

var count = 1;
function increase() {
  count += 1;
  // count ++;        THESE TWO THINGS ARE SAME
  console.log(count);
}

increase();
increase();
increase();

// var newNAME = "jane";
// console.log(newname); // will throw an errow refrence error because in console its in lower case its case sensitive u have to make sure to write the variable name exactly

var amChris = true;
console.log(amChris)
amChris = false
console.log(amChris)

var myNull = 'bob'
// var amINull = null
var amINull;    //  undefined
amINull = false

console.log(myNull)
console.log(amINull)

var amName = 'jane'

function show(){
    var amName = 'josh'      // we are declearing this variable again not reassigning     inthe function its local  and cannot be access out side the function
    console.log(amName)
}

show()
console.log(amName)              

var chk = 'josh'
function show(){
    chk = 'chris'               //   BY THIS WE ARE REASSIGNING THE VARIABLE
    console.log(chk)
}

show()
console.log(chk) 

