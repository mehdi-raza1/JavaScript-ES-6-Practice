//   A switch statement in JavaScript is used to perform different actions based on different conditions. 
//   It’s similar to using multiple if...else if...else

// METHOOD


/*
switch (expression){
    case value1:
        statments to be executed when results os expression matches value1
        break;
    case value2:
        ...  code here 
        break;
    case value3:
        ... code here
        break;
    default:                //  when any condition doesnt match it then default will work
        break;
}
        */



// const myfruit = 'apple';

//     if(myfruit === 'apple'){
//         console.log('Awesome! I Love apple.');
//     }else if(myfruit === 'orange') {
//         console.log('orange are cool');
//     }else if(myfruit === 'peer') {
//         console.log('peers are good too');
//     }else{
//         console.log('thats sounds good');
//     }

// const myfruit = 'peer';

// switch(myfruit){
//     case 'apple':
//         console.log('I Love Apple');
//         break;
//     case 'orange':
//         console.log('oranges are cool');
//         break;
//     case 'peer':
//         console.log('peers are too good');
//         break;
//     default:
//         console.log('i didnt understand but sure it is great')
//         break;
// }

// WE CAN MAKE TWO CASES AT ONE ONE TIME ALSO

const myfruit = 'apple';

switch(myfruit){
    case 'apple':
    case 'orange':
        console.log('I Love Apple');
        break;
        
    case 'peer':
        console.log('peers are too good');
        break;
    default:
        console.log('i didnt understand but sure it is great')
        break;
}

// we can use switch statments in function also

function numChecker(num){
    let value;
    switch(num){
        case 0:
        case 1:
        case 2:
            value = 'low range';
            break;
        case 3:
        case 4:
        case 5:
            value = 'mid range';
            break;
        case 6:
        case 7:
        case 8:
            value = 'high range';
            break;
        default:
            value = 'input number 0 to 9'
            console.log(value)
            return;
    }
    console.log('The value is '+ value)
}

numChecker(15)