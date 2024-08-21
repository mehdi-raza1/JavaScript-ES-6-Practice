// How to define function 

var hi = function(){
    console.log("hi")
}

hi();

//in E6 javascript we can create funtion by this also called arrow function

var sayhi= () =>{
    console.log("sayhi")
}

sayhi()

//  HOW TO PASS PARAMETER IN ARROW FUNCTION

const multiplier = (num1,num2)=>{
    return num1 * num2
}

console.log(multiplier(5,5))


const user = [
    {name:"chris",age:60},
    {name:'jane',age:30},
    {name:'billy',age:45}
]
//  TO GET DATA FROM AN ARRAY BY MAP 
const userNameList = user.map(function(user){
    return user.name
})

console.log(userNameList)

// TO MAKE REUSABLE FUNCTION FOR EVERY ARAY TO GET DATA

// function mapUserNames(myArray){
//     const userList = myArray.map(function(user){
//         return user.name
//     })
//     return userList
// }

// console.log(mapUserNames(user))


//  BY ARROW FUNCTION
const mapUserNames = (myArray) =>{
    const userList = myArray.map(function(user){
        return user.name
    })
    return userList
}

console.log(mapUserNames(user))


//  IF YOUR EXPRESSION IS RETURNING JUST ONE VALUE SO YOU CAN TYPE LIKE THIS ALSO
// BY REMOVING CURLY BRACKETS AND RETURN KEYWORD

const addition = (num1,num2)=> num1 + num2;

console.log(addition(2,4))

// if passing one parameter

const square = num => num * num;

console.log(square(5))



// filter function

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const filteredNumbers = numbers.filter(function(num){
//     return num === 5;
// })

// console.log(filteredNumbers)


const numbers = [1,2,3,4,5,6,7,8,9,10]

const filteredNumbers = numbers.filter(function(num){
    return num % 2 === 0;
})

console.log(filteredNumbers)



const doubledNumbers =(num)=>{
    const numberconstainer = [];

    num.forEach((n) => {
        const double = n *2
        numberconstainer.push(double)
    });
    return numberconstainer;
}

console.log(doubledNumbers(numbers))


//  TO DEFINE DEFAULT VALUES IN PARAMETER IF USER DONT WANT TO GIVE 

function numberMultiplier(x=5,y=10){
    return x* y;
}

console.log(numberMultiplier())
console.log(numberMultiplier(3))



// to slipts the whole word
function stringSplitter(str){
    return str.split(" ")
}

console.log(stringSplitter('hello world'))          // output will be  [ 'hello', 'world' ]  it will split the words and send it in an array

//      YOU CAN SET THE DEFAULT VALUE ALSO IF USER DONT WANT TO GIVE ANY ARRGUMENT TO AVOID ERRORS

const initialString = "how are you"
// function stringSplitter(str = initialString){
//     return str.split(" ")
// }

// console.log(stringSplitter('hello world'))  


const bankAccount = {
    canSpendMoney : true,
    hasCreditCard: true,
    balance:100
}

function canPurchaseItem(price,acct = bankAccount){
    if(acct.canSpendMoney && acct.balance > 0 && price <= acct.balance){
        acct.balance -= price;
        if(acct.balance <= 0){
            acct.canSpendMoney = false
        }
        return true;
    }else{
        return false;
    }
}

console.log(canPurchaseItem(101))
console.log(bankAccount)
console.log(canPurchaseItem(50))
console.log(bankAccount)


// HOW TO DISPLAY ALL THE ARGUMENTS
    ///  IT WILL DISPLAY ALL THE ARGUMENTS IN AN OBJECT AND KEY WLL BE STARTING FROM ZERO

    
// function logAllArgumnets(x){
//     console.log(arguments)
// }

// logAllArgumnets(4, 5, 6)



// to wriite in array by an older version of js // unexpected elements        // it can have string also
function logAllArgumnets(x){
        const args = Array.prototype.slice.call(arguments,logAllArgumnets.length)
        console.log(args)
    }
    
    logAllArgumnets(6,5,2,10,6)
    
    
    // IN E6 VERSION OF JS TO IMPLEMENT IN AN ARRAY

    // function logAllArgumnetsInArray(x,...nums){
    //     console.log(nums)
    // }
    // logAllArgumnetsInArray(10,5,1,3,6,9)

    function logAllArgumnetsInArray(multiplier,...nums){
        return nums.map(n => multiplier * n)
    }
    console.log(logAllArgumnetsInArray(10,5,1,3,6))

    
    
    // arrow function and our traditional function one more difference
    //  we can built up constructor to create a function
    // YOU CANT DO THIS WITH ARROW FUNCTION  THIS IS A WAY TO CREATE OBJECT / INSTANCE

    // function Dog(years,breed){
    //     this.age = years;
    //     this.type = breed
    // }

    // const spike = new Dog(3, "Golden Retriver")
    // const fido = new Dog(5 , "poodle")

    // console.log(spike)
    // console.log(fido)


    // IF WE HAVE A SOME TYPE OF INTERVAL FOR EG: AT SOME POINT THE DOGS INCREASE THE AGE THEN WE USES JS BUILTIN FUNCTIONS

    // function Dog(years,breed){
    //     const that = this;                 // that = this; assignment is used to capture the correct context inside the inner function
    //     that.age = years;
    //     that.type = breed
    //     setInterval(function(){
    //         that.age += 1
    //         console.log(that)
    //     },1000)
    // }

    // const spike = new Dog(3, "Golden Retriver")
    // const fido = new Dog(5 , "poodle")

    // console.log(spike)
    // console.log(fido)

    //      arrow functions don’t have their own this; they inherit it from the surrounding scope

    function Dog(years,breed){
                        
        this.age = years;
        this.type = breed
        setInterval(()=>{
            this.age += 1
            console.log(this)            
        },1000)
    }

    const spike = new Dog(3, "Golden Retriver")
    const fido = new Dog(5 , "poodle")

    console.log(spike)
    console.log(fido)
