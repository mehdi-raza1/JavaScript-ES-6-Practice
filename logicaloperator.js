// used when u want too check two or more condition at a time

//  &&   AND  OPERATOR BOTH SIDE OF AND MUST BE TRUE
//  ||   OR OPERATOR ONE SIDE NEED BE TRUE
//  !  NOT OPERATOR CONVERT TRUE TO FALSE AND FALSE TO TRUE



// const bankAccountBalance = 124;
// const costOfItem = 123;
// const canSpendmoney = true;

// if(bankAccountBalance >= costOfItem && canSpendmoney === true){     // both condition must  be true && its mean AND  if the condition is true then it moves in block
//     console.log("you can purchace this item")
// }


const bankAccountBalance = 124;
const costOfItem = 123;
const canSpendmoney = true;

// if(bankAccountBalance >= costOfItem && canSpendmoney === true && costOfItem <150){  
//     console.log("you can purchace this item")
// }




//OR OPERATORS  ||
// NEED ONE SIDE OF OR OPERATOR TO BE TRUE

if(bankAccountBalance >= costOfItem || canSpendmoney === true ){  
        console.log("you can purchace this item")
    }


//  not operator
//convert true to false and false to true   vice versa

const hasReachedCreditLimit = false;

if(!hasReachedCreditLimit){
    console.log("can purchase ")
}

// let name;    to change undefine to true
// console.log(!name)
// console.log(name)
