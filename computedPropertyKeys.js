//   ALLOW USE OF SQUARE BRACKETS WHICH WILL EVALUATE (a.k.a compute) as the property name


let myID = 573;
const idParam = "userID"
const computedObj = {
    [idParam + (myID += 1)]:"100341",                // to get the top id

}

console.log(computedObj)


function capitalizer(word){
    const a = word.charAt(0).toUpperCase();
    const b = word.slice(1).toLowerCase()
    return a+b;
}

const obj = {
    [capitalizer("hello")]: "something",
    [capitalizer("AKAD")]: "nothing",
}

console.log(obj)


function dataFormat(arr){
    return arr.map(n=>{
            console.log(n)
    })
}

console.log(dataFormat(bob))