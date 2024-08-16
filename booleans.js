console.log(true)  // WILL PRINT TRUE
console.log(false)  // WILL PRINT FALSE

 var shouldBeTrue = true

 console.log(shouldBeTrue)  // output true

 console.log(shouldBeTrue === false)  // output will be false


 // ==  wil check value just
 // ===  wil check the value and datatype also

 if(shouldBeTrue === true){
    console.log("its true")
 }else{
    console.log("its not true")
 }




 var shouldBeNull = null
 //output will be its false because shouldBeNull value is Null
 if(shouldBeNull == true){
    console.log("its true")
 }else{
    console.log("its false")
 }

var hasContent = "helloworld"
// OUTPUT WILLL BE FALSE BECAUSE ITS CHECKING DATATYPE AND VALUE BOTH
console.log(hasContent === true)
// output will be true because boolean(hascontent) will pass true and false the second condition will be check with true
console.log(Boolean(hasContent)=== true)


var doesNotHaveContent = ""
console.log(Boolean(doesNotHaveContent)=== true) // output will be false because variable is empty


var isZero = 0;
console.log(Boolean(isZero)) // output will be false  BCAUSE IN BOOLEAN ZERO CONSIDER AS FALSE

var isNotAZero = 1;
console.log(Boolean(isNotAZero)) // output will be true

var nonAssignedVariable ;
console.log(Boolean(nonAssignedVariable)) //output will be false because there is no value init
console.log(nonAssignedVariable) // output will be undefined beacuse we didnt gives a value to the variable
console.log(typeof nonAssignedVariable)  // if there is no value of variable so its undefined type


var isFalse = false;
var isNotANumber = NaN;

console.log(Boolean(isFalse)) // output will be false because of its value
console.log(Boolean(isNotANumber))  // output will be false because nan is consider as false


var myArray = [1,2,"hello",'world'];
var emptyArray = [];
var emptyObject =  {};
 // output will be true for all beacuse array is consider like a valid object or  array
console.log(Boolean(myArray))
console.log(Boolean(emptyArray))
console.log(Boolean(emptyObject))

// if(Boolean(myArray))  &&  if(myArray)   both works like same
if(myArray){
    console.log("Has Truthy Value");
}else{
    console.log("Has Falsy Value")
}


console.log(null === undefined) // output will false because  null and undefined both are different
