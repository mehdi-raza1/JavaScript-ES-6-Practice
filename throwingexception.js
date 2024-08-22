// THROW YOUR OWN EXCEPTION

/*
    -  USE THE THROW  STATMENTTO THROW OWN EXCEPTION
    -  YOU SPECIFY THE EXPRESSION CONTAINING THE VALUE TO BE THROWN
    EG: THROWN EXPRESSIN
    -  CAN THROW ANY EXPRESSION

*/




// const myObj = {
//     a:1,
//     b:2
// }

// myObj.map((obj)=>console.log(obj))

function checkIfNum(n){
    if(isNaN(n)){
        throw 'this is not a number'
    }else{
        console.log(n)
    }
}
// checkIfNum("hi")
checkIfNum(1)


const myObjException = {
    toString: function(){
        return "i am object exception"
    }
}

function MyException(message){
    this.message = message
    this.name = "my exception"
    this.toString = function(){
        return this.name + " : " + this.message
    }
}

throw new MyException("field Invalid")




