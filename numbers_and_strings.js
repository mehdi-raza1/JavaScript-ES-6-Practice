// Number


// IT CONSIDER NUMBER DOES NOT MATTER IF ITS FLOATING NUMBER 

console.log(20)
console.log(typeof 20)

console.log(20.50)
console.log(typeof 20.50)

//consider as string if its double quotations

console.log(typeof "20")
console.log(typeof "20.50")


console.log(20 + 6)    // ADDITION 
console.log(20 % 6)    // MUDULUS  REMAINDER
console.log(20 - 6)    // SUBTRACTION
console.log(20 / 6)    //  DIVISON
console.log(20 * 6)    //  MULTIPLICATION



// SOME MATH FUNCTION

console.log(Math.random())   // gives a unique number in between 0 and 1
console.log(Math.PI)    //provides a ratio of circle



// NUMBER AND STRING TOGETHER

console.log("20"+15)    // it will work like concatinate
// console.log(typeof "20"+15)

// if one number is in string  and u want to add with the number u have to conver it into integer first

console.log(parseInt("20") + 20)


// SECOND ARRGUMENT IS OPTIONAL AND BY DEFAULT ITS VALUE IS 10
// AND THE SECOND PARAMETER WE CALL RADIX
// INTERPRETS THE STRING BASED ON SECOND BASE PARAMETER
console.log(parseInt("20",2))
console.log(parseInt("20",8))
console.log(parseInt("20",10))
console.log(parseInt("20",16))

//  2  IS BINARY
//  8  IS OCTAL
// 10  IS DECIMAL
// 16  IS HEXADECIMAL


console.log(parseInt("hello"))  // OUTPUT WILL BE NAN {NOT A NUMBER} BECAUSE IT IS ALPHABETIC

console.log(isNaN("hello"))  // OUTPUT WILL BE TRUE  BECAUSE ITS A STRING ISNAN PROVIDE OUTPUT IN TRUE AND FALSE
console.log(isNaN("25"))  // OUTPUT WILL BE FALSE  BECAUSE ITS A NUMBER IN STRING AND IT CAN BE CONVERTED INTO NUMBER
console.log(isNaN(25))  // OUTPUT WILL BE FALSE  BECAUSE ITS A NUMBER ISNAN PROVIDE OUTPUT IN TRUE AND FALSE


console.log(+"20")  // fast way to convert string number into a  number this plus is unary operator 

//  STRINGS

// SEQUENCES OF UNICODE Character AND WILL  BE WRITEN SINGLE QUTATION OR DOUBLE QUTATION

console.log("hello")
console.log('hello')
console.log(typeof "hello")
console.log(typeof 'hello')


// IF WANT TO CHECK THE LENGTH ITS BUILTIN METHODS OF A STRING
// it will count from 1 and it will consider a space also if there  will be a space

console.log("SUPERDUPER".length) //output 10
console.log("SUPER DUPER".length) //output 11


// CHAR AT IS ANOTHER FUNCTION OF STRING IT WILL PROVIDE THE CHARACHTER OF A STRING BY THE INDEX NUMBER 
// INDEXES STARTS FROM 0

console.log("hello".charAt(0)) // OUTPUT WILL BE h
console.log("hello".charAt(4)) // OUTPUT WILL BE o
console.log("hello".charAt(5))  // OUTPUT WILL BE EMPTY

// CONCATINATING TWO OR MORE THAN TWO STRINGS

console.log("Hello" + "World" + "!")  //OUTOUT HelloWorld!
console.log("Hello " + "World " + "!")  //OUTTPUT Hello World !   want some sapces

// another function of strings

console.log("i want to be  uppercase".toUpperCase()) // IT WILL CONVERT EVERY CHARACTER IN  UPPERCASE
console.log("I WANT TO BE IN LOWER CASE".toLowerCase()) // IT WILL CONVERT EVERY CHARACTER IN  LOWERCASE
