//  Map Object

// --  used for simple keys/values pairs
// --  any value can be used for either  a key or value (i.e object,string, function)
// --  Reasons for sing map over object
// --  object prototype has default keys that might conflict  with own keys
// --  keys of map can be anything , where with objects, have to be string, symbol
// -- can eaisly size of the map

const myMap = new Map();
myMap.set("key","value")
myMap.set("anotherKey","anothervalue")
myMap.set("anothertwoKey","anothertwovalue")

console.log(myMap)
console.log(myMap.size)


const firstKey = 'key';
const firstval = 'first value :D'
const secondKey = {}
const thirdKey = function(){}

const myNewMap = new Map();
myNewMap.set(firstKey,firstval)
myNewMap.set(secondKey,"anothervalue")
myNewMap.set(thirdKey,"anothertwovalue")

console.log(myNewMap)
console.log(myNewMap.size)

// myNewMap.forEach((val)=>{
//     console.log(val)
// })

// for(const [key,values] of myNewMap.entries()){
//     console.log(`${key}  =>  ${values}`)
// }

for(const val of myNewMap.entries()){
    console.log(val)
}



// sets
// lets to store unique values of any types
//  each elent is unique

console.log('SETS')


const myset = new Set();
myset.add("bob")
myset.add(true)
myset.add(56)

console.log(myset)
