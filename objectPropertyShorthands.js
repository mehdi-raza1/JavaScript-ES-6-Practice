//  OLD WAY METHOD


const a =10
const b =20
const c =30
const d ={
    a:a,
    b:b,
    c:c
}

console.log(d.a)


//  NEW WAY METHOD

const e = {
    a,b,c
}

console.log(e.c)

const {b : anotherB} = e                //  TO CHANGE THE NAME OF THE KEY WHILE DESTRUCTURING
const {c : anotherC} = e                //  TO CHANGE THE NAME OF THE KEY WHILE DESTRUCTURING

console.log(anotherB)
console.log(anotherC)


function objectBuilder(x,y,z,numTimes){
    const allObjects = [];
    for(let i =0; i<numTimes; i++){
        const newObj ={
            x : i+1,
            y,
            z
        }
        allObjects.push(newObj)
    }
   return allObjects
}

// console.log(objectBuilder(10, "bob", false,10))
const bob = objectBuilder(10, "bob", false,10)
const {x:bobID} = bob[0]
console.log(bobID)