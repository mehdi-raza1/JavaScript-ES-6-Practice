//  REPEAT UNTILL A SPECIFIED CONDITION EVALUATES TO FALSE


/*
for(initial expression, condition,expression increment or decrement){

    STATEMENT
}
*/


var index=0;

for(index; index<10;index+=1){
    console.log(index)
}


// const iceCreams = ['vanilla','chocolate','rocky road','straberry']

// for(var i =0;i<iceCreams.length;i++){
//     console.log(iceCreams[i])
// }


const iceCreams = ['vanilla','chocolate','rocky road','straberry']

function iceCreamLooper(arr,type){
    for(var i =0;i<arr.length;i++){
        if(arr[i] === type){
            console.log(arr[i]+ " is at position: " + i)
        }
    }
}

iceCreamLooper(iceCreams,"rocky road")


//  CONTINUE USED FOR TO SKIP THE PART

let x = 0;
while(x<10){
    x += 1;
    if(x===5){
        console.log('i am being skiiped')
        continue;
    }
    console.log(x)
}

outerLoop:
for(let i =0; i <10;i+=1){
    console.log("loop: " + i)
    innerLoop:
    for(let a =0; a<10;a++){
        console.log('Inner loop: '+a)
        if(a===4){
            break innerLoop;
        }
        if(i === 5){
            break outerLoop
        }
    
    
    }
}


// for(var i = 0; i<10;i+=1){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }


// function looper(value){
//     setTimeout(function(){
//         console.log(value)
//     }, value * 1000)
// }

// for(var i = 0; i<10;i+=1){
//     looper(i)
// }


 for(let i = 0; i<10;i+=1){
       setTimeout(function(){
        console.log(i)
       },1000)
    }
    
