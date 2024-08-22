// let a = 20;
// let b =40;
// let c = 80;

// [b, c] = [c, b];
// console.log(c)




// let d = 20;
// let e = 40;
// let f = 80;

// [e, f] = [f, e];
// console.log(e);




function numAdder(num1,num2){
    return new Promise((resolve,reject)=>{
        const totalAmount = num1 + num2
        if(Math.random() > 0.5){
            reject("not possible")
        }
        setTimeout(()=>{
            resolve(totalAmount)
        },3000)
    })
}


function multiply(num){
    return new Promise((resolve,reject)=>{
        const multiply = num * num
        setTimeout(()=>{
            resolve(multiply)
        },2000)
    })
}

function errorFunction(num){
    return new Promise((resolve,reject)=>{
        const verify = num -16
        if(verify < 10){
            reject("Your Answer is less then 10")
        }else{
            resolve(verify)
        }
    })
}

numAdder(2, 2)
.then((data)=>{
    return multiply(data)
}).then((moreData)=>{
    return errorFunction(moreData)
}).then((finalData)=> console.log(`Your Final Data is  ${finalData}`))
.catch((error)=>{
    console.log(error)
})