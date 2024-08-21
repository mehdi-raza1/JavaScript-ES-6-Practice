// function sayHi(){
//     var shouldSayhi = true
//     if(shouldSayhi===true){
//         var myName = 'chris'        //THIS VAR  WILL WORK OUT SIDE THE SCOPE OR U CAN SAY BLOCK 
//     }
//     console.log(myName)
// }

// sayHi()

function sayHi(){
        var shouldSayhi = true
        if(shouldSayhi===true){
            var myName = 'chris'       
        }
        myName = 'BOB'                  // reassign the variable
        console.log("Hi " + " " +myName)
    }
    

    sayHi()

// function sayHello(){
//     var shouldSayHi = true;
//     var reallySayHi =true;
//     if(shouldSayHi===true){
//         var mynewName = 'chris'
//         if(reallySayHi === true){
//         var myLastName = 'Smith'
//         }
//     }
//     myLastName = 'jones'
//     console.log("hi "+ mynewName + myLastName)
// }

// sayHello()

// function sayHello(){
//         var shouldSayHi = true;
//         var reallySayHi =true;
//         if(shouldSayHi===true){
//             let mynewName = 'chris'
//             console.log("hi "+ mynewName)
//         }   
        
//         // console.log("hi "+ mynewName)                     // GIVES AN ERROR BECAUSE LET DOESNT WORK OUT ISDE THE BLOCK
//     }
    
//     sayHello()


// function sayHello(){
//         var shouldSayHi = false;
//         var reallySayHi =true;
//          let mynewName ;
//         if(shouldSayHi===true){
//             mynewName = 'chris'
//             console.log("hi "+ mynewName)
//         }else{
//             mynewName = 'jane'
//             console.log("hi "+ mynewName)
//         }
        
       
//     }
    
//     sayHello()


// function sayHello(){
//         var shouldSayHi = false;
//         const  mynewName = 'chris';  // U HAVE  TO ASSIGN THE VALUE U CANT LEAVE IT EMPTY IN CONST
//         if(shouldSayHi===true){
//             mynewName = 'chris'
//             console.log("hi "+ mynewName)
//         }else{
//             mynewName = 'jane'              // CANT REASSIGNED THE VALUE AGAIN
//             console.log("hi "+ mynewName)
//         }
       
//     }
    
//     sayHello()


// const mySameName = 'chris';
// mySameName= 'chris'       // not allowing to reasigned


const myArray = [1,2,3,4]
console.log(myArray)
myArray.push(8,9,10,11)     //its posiible
console.log(myArray)


const myObj = {
    name : 'Chris'
}

console.log(myObj)
// myObj = {                        // its not possible
//     name:'Bob'
// }
myObj.name = 'bob'
console.log(myObj)




function  consfunc(){
    const myName='mehdi'
    if(true){
        const myName = 'jim'
        console.log(myName)    // WILL THROW AN ERROR  if u are using outside the scope
    }
    console.log(myName)    
}
consfunc()

function sayHi(){
    var shouldSayhi = true
    if(shouldSayhi===true){
        var myName = 'chris'        //THIS VAR  WILL WORK OUT SIDE THE SCOPE OR U CAN SAY BLOCK 
        shouldSayhi = false;
    }
    myName = "raza"
    console.log(myName)
    console.log(shouldSayhi)
}


// console.log(myName)
// console.log(shouldSayhi)
sayHi()
// console.log(myName)


// function sayChecking(){
//     var shouldSayHi = true;
//     var reallySayHi = true;
//     if(shouldSayHi){
//         let  myName = "let Name"
//         // console.log(myName)
//     }
//     myName = 'new Name'
//     console.log(myName)
// }

// sayChecking()


// function sayChecking(){
//     var shouldSayHi = true;
//     var reallySayHi = true;
    
//     if(shouldSayHi){
//         let  myName = "let Name"
//         console.log(myName)
//         myName = 'new Name'
//         console.log(myName)
//     }
//     //  console.log(myName)
// }

// sayChecking()

function sayChecking(){
    var shouldSayHi = true;
    var reallySayHi = true;
    // const  myName = "let Name"
    
    if(shouldSayHi){
        const  myName = "let Name"
        console.log(myName)
        // myName = 'new Name'
        // console.log(myName)
    }
     console.log(myName)
}

sayChecking()