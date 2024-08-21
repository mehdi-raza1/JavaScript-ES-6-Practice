///   FOR IN LOOPS
//  ITS USED FOR OBJECTS
//  USED FOR LOOPING OBJECT PROPERTIES


// const users = {
//     1:'sally',
//     2: 'Billy',
//     3: "Ashley",
//     4: 'timmy'
// }

// for(let props in users){
//     console.log(props)
// }



// const users = {
//     a:'sally',
//     b: 'Billy',
//     c: "Ashley",
//     d: 'timmy'
// }
// for(let props in users){
//     let newUsers = users[props]
//     newUsers = 'redacted'
//       console.log(newUsers)
// }


// const users = {
//     a:'sally',
//     b: 'Billy',
//     c: "Ashley",
//     d: 'timmy'
// }

// for(let props in users){
//     if(users[props]==='sally'){
//         users[props] = 'unknown';
//     }
//     console.log(users[props])
      
// }





//  for each is used for array 


// const drinks = ['coffee','sprite','tea','coke','pepsi'];

// for(let d in drinks){
//     console.log(drinks[d])
// }

// drinks.forEach((d)=>{
//     console.log(d)
// })


// FOR OF LOOPS
//  new loop in E6 js  used to loop over iterable objects (array,strings,maps,sets,etc)
//  for looping of data --- like value in an array 

// const drinks = ['coffee','sprite','tea','coke','pepsi'];

// for(const d of drinks){
//     if(d === 'tea'){
//         continue;
//     }
//     console.log(d)
// }


// const myStrings = 'hello';

// for(const character of myStrings){
//     console.log(character)
// }

// const orignalArray = [10,15,20,25,30,40];

// function numIncreaser(arr,numToIncBy){
//     for (let num of arr){
//         num += numToIncBy;
//         console.log(num)
//     }
// }

// numIncreaser(orignalArray, 30)


const orignalArray = ['chris','sally','billy','bob','chris','billy','jane'];

const uniqueNames = new Set(orignalArray);

for(const n of uniqueNames){
    console.log(n)
}


const myObject={
    name:'chris',
    age: 20,
    city: "fake city",
    strret : 'fake street'
}

for(const a of myObject){
    console.log(a)
}