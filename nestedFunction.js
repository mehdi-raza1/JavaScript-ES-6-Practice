// nested function 



function squareAndMultiply(num1,num2){
    function squarer(x){
        return x*x
    }

    function multiplyBy10(y){
        return y*10
    }
    return squarer(num1) * multiplyBy10(num2)
}

console.log(squareAndMultiply(4, 4))            // we cant call the inside function like this

//  function nameFormatter(firstName,SecondName,age){
//     function format(arg1,arg2){
//         return arg1 + " " + arg2
//     }
//     const FormattedName = format(firstName,SecondName)
//     return FormattedName;
//  }

//  console.log(nameFormatter('chris', 'jones', 28))




// function nameFormatter(firstName,SecondName,age){
//         function formatnames(arg1,arg2){
//             return arg1 + " " + arg2
//         }
   

//         function dataFormatter (fullName,num){
//             const formattedData = {
//                 name:fullName,
//                 age:num
//             }
//             return formattedData;
//         }

//         const formatname = formatnames(firstName, SecondName)
//         return dataFormatter(formatname, age)
//      }
    
//      console.log(nameFormatter('chris', 'jones', 28))






function formatnames(arg1,arg2){
    return arg1 + " " + arg2
}

function dataFormatter (fullName,num){
    const formattedData = {
        name:fullName,
        age:num
    }
    return formattedData;
}

function nameFormatter(firstName,SecondName,age){
    
    const formatname = formatnames(firstName, SecondName)
    return dataFormatter(formatname, age)
 }

 console.log(nameFormatter('chris', 'jones', 28))