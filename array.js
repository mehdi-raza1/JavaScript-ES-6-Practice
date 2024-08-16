// COLLECTION OF DATA
// IT CAN BE A  NUMBER , STRING , BOOLEANS ,OBJECTS
// WE CAN ACCESS DATA IN ARRAY BY INDEXSES
// and length will be strat from 1

var myArray = [1,2,3,"hello","world",true]

console.log(myArray.length)

console.log(myArray[5])  // will print true at index 5 there is true
console.log(myArray[6])  // undefined there no value at index 6

// WE CAN DEFINE ARRAY BY THIS ALSO

var myOtherArray =  new Array();

myOtherArray[0] = 'hello';
myOtherArray[1] = 'world';
myOtherArray[2] = 'chris';
myOtherArray[3] = 'sally';
myOtherArray[100]= 'raza'


console.log(myOtherArray)  // FROM 4 INDEX TILL 99 INDEX IT WILL BE EMPTY
console.log(myOtherArray.length) // OUTPUT 101 BECAUSE THERE IS NO LIST FROM 4 ARRAY TO 99 ARRAY

var myNamesArray = ['chris','sally','jessica','john']

// to add / push data in an array
myNamesArray.push('bob')  // push will add data inside an array at the end
myNamesArray.push(10)  // push will add data inside an array at the end
myNamesArray.push(true)  // push will add data inside an array at the end
myNamesArray.push('jane')  // push will add data inside an array at the end

//WE CAN ADD ALL OF THEM TOGETHER  ALSO
myNamesArray.push('ali','raza','mehdi')
console.log(myNamesArray)

myNamesArray.pop() // IT WILL REMOVE AN ITEM FROM THE END


console.log(myNamesArray)


// WE CAN ADD ARRAY IN AN ARRAY LIKE   ---  NESTED ARRAY
var myNewArray = ['chris','sally','jessica','john']

myNewArray.push(['check','jane','jessica'])
console.log(myNewArray)
console.log(myNewArray[4])
console.log(myNewArray[4][2])


var collectionOfData = ['chris','jessica','john','jane']
var sortedData =collectionOfData.sort();    // to sort data with alphabetic

console.log(sortedData)

sortedData.reverse() // to reverse the Data
console.log(sortedData)


//  CONCATINATTE TWO ARRAYS

var myFirstArray = ['chris','zack','jessica','john','jane']
var mySecondArray = ['jake', 'amy','timmy']
var myThirdArray = ['peter', 'marry','james']

var concattedArray = myFirstArray.concat(mySecondArray,myThirdArray)   //  IT WILL MERGE TWO ARAY IN ONE

console.log(concattedArray)


var slicedArray = concattedArray.slice(5)  // IT WILL START PRINTING FROM INDEX 5 AND IF U USE SECOND PARAMETER OF SLICE IT WILL WHERE TO STOP
console.log(slicedArray)
console.log(concattedArray.slice(5,8))  // it will go tll 7

// JOIN FUNCTION OF AN ARRAY

var myjoinedArray = ['chris','zack','jessica','john','jane']

var joinnedArray = myjoinedArray.join(" ")  // it will join the whole as a one string by defining in double quotes it will used by this .join(" ")
console.log(joinnedArray)



// ENTERING OBJECT INTO AN ARRAY

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
var coconutDonut =  new DonutConstructor('chocolate', false, 8, true)
var vanilaDonut =  new DonutConstructor('vanilla', true, 10, false)


// var myDonut = [coconutDonut,vanilaDonut]
// var lastDonut =myDonut.pop()     // to get last index
// console.log(lastDonut)
// lastDonut.sayType()


// var donutLength = myDonut.length;
// var lastDonut = myDonut[donutLength-1]    // to get the last value

// lastDonut.sayType()

// lastDonut.showSweetness()

var myDonut = [coconutDonut,'asas','asasdomdf',vanilaDonut]
var lastDonut = myDonut.slice(myDonut.length - 1)   // TO GET LAST VALUE OF AN ARRAY
console.log(lastDonut)

lastDonut[0].showSweetness();

var names = ['james','john','jessica',"jane"]
var sliceArrar = names.slice(names.length -1)
sliceArrar[0] = 'jessica joe joe update an array'   // to update a value in an array
console.log(names)                      
console.log(sliceArrar)