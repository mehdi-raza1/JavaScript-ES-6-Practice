// OBJECT IS COLLECTION OF KEY AND VALUES PAIRS

var data = {
    1:"hello",
    2:"world"
}
console.log(data)

// WAYS OF DEFINING Object OR CREATING THEM

var myObject = new Object();
var myOtherObject = {}

// TO DEFINE A VALUE IN A OBJECT
// key can be number or string but must be unique 

myObject['1'] = 'chris'   // VARIABLENAME['KEY NAME IN QUTATION '] = VALUE IN QUTATION
myObject['2'] =  'sally'
myObject['3'] = 'BOb'
console.log(myObject)

var myOtherObject = {
    1:'chris',
    2:'sally',
    3:'Bob',
    4:'Billy'
}
myOtherObject['5'] = 'Ashley'
console.log(myOtherObject)


var myAnotherobject = {
    firstName :'chris',
    lastName : 'smith',
    age : 50,
    phone : "555-555-5555"

}

console.log(myAnotherobject)

// HOW TO GET VALUES OF A KEY 
// OBJECT_NAME  .  KEY_NAME
// OBJECT_NAME ['VALUE']   // VALUE WILL BE IN QUOTES


console.log(myAnotherobject.lastName)
console.log(myAnotherobject.phone)
console.log(myAnotherobject['firstName'])
console.log(myAnotherobject['phone'])


// WE CAN CREATE OBJECTS INTO OBJECTS

var mySecondObject = {
    firstName :'chris',
    lastName : 'smith',
    age : 50,
    numbers : {
        mobile:'666-6666-6666',
        home: '222-2222-2222'
    },
    address: {
        homeAddress:"abcd",
        officeAddress:"xyz"
    }

} 

console.log(mySecondObject)

// to get certain value from key

console.log(mySecondObject.numbers.mobile)
console.log(mySecondObject['numbers']['home'])

// WE CAN STORE THIS VALUE IN VARIABLE

var usermobileNumber = mySecondObject.numbers.home

console.log(usermobileNumber)



var donut = {
    type:"coconut",
    glazed:true,
    sweetness:8,
    hasChocolate:false,
    sayHi: function (){
        console.log("Hi")
    }

}

console.log(donut)

//HOW TO CALL FUNCTION WHICH IS IN FUNCTION 

console.log(donut.sayHi()) // it will say print the console also and print undefined also

// the best way to get function of object 

donut.sayHi()

var donut = {
    type:"coconut",
    glazed:true,
    sweetness:8,
    hasChocolate:false,
    sayType: function (){
        console.log("type: " + this.type)  // this refer to this object it will the value of that variable, currrent variable is "type"
    },
    showSweetness: function(){
        console.log("sweetness: "+ this.sweetness + " /10")
    }

}

donut.sayType()
donut.showSweetness()


// constructor pattern for creating objects    
// IF CLIENT WANTS DIFFERENT TYPE OF DONUTS WE CANT CREATE ALL OBJECTS WE WILL CREATE ONE AND PASS THE VALUES by function

function DonutConstructor(type,glazed,sweetness,hasChocolate){
    this.type = type;                            // THIS REFERS TO THIS FUNCTION 
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function(){                  // WE CAN CREATE FUNCTION IN FUNCTION 
        console.log('type: ' + this.type)
    };
    this.showSweetness = function(){
        console.log('sweetness: ' + this.sweetness + '/10')
    };
}

// NEW KEY WORD IS USED FOR CREATING OBJECT 
// BY THIS WE DONT HAVE TO CREATE OBJECTS OVER AND OVER AGAIN BY THIS FUNCTION IT WIL CREATE OBJECT
var coconutDonut =  new DonutConstructor('chocolate', false, 8, true)
var vanilaDonut =  new DonutConstructor('vanilla', true, 10, false)

console.log(coconutDonut);

coconutDonut.sayType()
coconutDonut.showSweetness()

vanilaDonut.sayType();
vanilaDonut.showSweetness()

coconutDonut['tasteGood'] = true;

console.log(coconutDonut['tasteGood'])