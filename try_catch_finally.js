// try{
//     throw "Exception!"
// }catch(e){
//     console.log(e)
// }
// console.log("i want to run")



let myNum = 20;
const myErrorlog = [];
function checkIfNum(num){
    if(isNaN(num)){
        throw 'not a number!'
    }else{
        console.log('yes thiss is a number')
    }
}

// console.log('i want to live ')

function errorhandler(e){
    myErrorlog.push(e)
}

try {
    
    checkIfNum(myNum)
} catch (catchID) {
    console.log("caught an error")
    errorhandler(catchID)
}



function MyString(string){
    if(typeof string === 'string'){
        this.value = string;
        this.getValue = function () {
            console.log( "your string: "+this.value +  ".");
        }
    }else{
        throw new StringException(string);
        
    }
}

function StringExceptionError(value){
    this.value = value;
    this.message = 'must be a string';
    this.toString = function () {
        return this.value +": "+ this.message
    }
}

function verifystring(s){
    try{
        var str = new MyString(s)
    }catch(e){
        if(e instanceof StringExceptionError){
            console.log("string exception")
        }else{
            console.log("other exception")
        }
    }
    return str;
}

const a = verifystring("i am string")
// console.log(a)
a.getValue()



function finallyExample(){
    try {
        console.log("hi")
        throw 'test'
    } catch (error) {
        console.log(error)
        return true
    }finally{
        console.log("i will always run")
        return true
    }
}

finallyExample()