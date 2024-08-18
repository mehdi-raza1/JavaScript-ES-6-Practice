//  quik and easy way to do something repeadetedly

// while loop

// while(condition){
//     statments
// }

// let numberofloops = 0;
//  while (numberofloops<10){
//     console.log("I am looping")
//     console.log(numberofloops)
//     numberofloops ++ ;
//  }

let num1 = 0
let num2 = 0

while(num1<8){
    num1 += 1
    console.log(num1)
    num2 += num1
}
console.log(num2)


//  how to use loop on an array

const names = ['chris', 'bob' , 'joe'];
let index = 0;
while(true){
    if(names[index] === 'joe'){
        console.log(names[index])
        break;
    }
    index += 1
}


// do while       

let shouldRunOnlyOnce = false;

do{
    console.log("looping");
    shouldRunOnlyOnce = false
}while(shouldRunOnlyOnce)




// let condition;

// do{
//     const userInput = prompt("enter q to exit")
//     if(userInput==='q'){
//         condition = false;
//     }else{
//         condition = true
//     }
// }while(condition)



let totalMoney = 100;
 
do{
    checkIfCanPurchase();
}while(totalMoney>500);

function checkIfCanPurchase(){
    if(totalMoney>500){
        console.log("can purchase")
    }else{
        console.log("cannot purchase")
    }
}