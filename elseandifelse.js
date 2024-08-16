//  its  used for too many conditions

const bankAccountBalance = 1
const costOfItem = 123
const hasCreditCard = true;
const hasreachedCreditLimit = false

if(bankAccountBalance >= costOfItem){
    console.log("congrats! you can pay this with cash")
}else{
    console.log("soory , you cant purchase this item")
}


// nested if statments 

if(bankAccountBalance >= costOfItem){
    console.log("congrats! you can pay this with cash")
}else{
    if(hasCreditCard && !hasreachedCreditLimit){
        console.log("congrats you can pay this with credit card")
    }else{
        console.log("sorry, you cant afford")
    }
    // console.log("sorry, you can not purchase this item")
}


// nested if else if statments

if(bankAccountBalance >= costOfItem){
    console.log("congrats! you can pay this with cash")
}else if( hasCreditCard && !hasreachedCreditLimit ){
    console.log("you can pay this with credit card")
}else{
    console.log("sorry you can not purchase item")
}