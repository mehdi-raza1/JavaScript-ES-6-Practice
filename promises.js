//  --   A promise is a proxy for a value not necessarily known when the promise is created
//  --  promises (similar to call back) are used for async computation
// -- think of a promise  as representing as a value that may be available  now, later or never
//  -- can associate a handler with an async action
// -- A promises exists in these states:
//  -- pending : initial state , not fullfilled
//  -- fullfilled: ok! got it
// -- rejected: failed

// const testPromise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     reject("Promises are no good! Rejected");
//   }
//   setTimeout(() => {
//     resolve("promise ok");
//   }, 1000);
// });

// testPromise.then((resolveMessage) => {
//     console.log(`looks like ${resolveMessage}`);
//   })
//   .then(() => {
//     console.log("I should runafter the promise is resolved");
//   }).catch((rejectMessage)=>{
//     console.log(`Error: ${rejectMessage}`)
//   })

// function numAdder(n1, n2) {
//   return new Promise((resolve, reject) => {
//     reject("not Today");
//     const addedNums = n1 + n2;
//     setTimeout(() => {
//       resolve(addedNums);
//     }, 500);
//   });
// }

// function numSquare(num) {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       reject("nope!");
//     }
//     setTimeout(() => {
//       resolve(num * num);
//     }, 800);
//   });
// }
// numAdder(100, 23).then(data=>console.log(`Added total : ${data}`))
// numAdder(10, 10).then(data=> {
//     return numSquare(data)
// }).then((moreData)=>{
//     console.log(moreData)
// }).catch(err => console.log(err))

// function alwaysResolve() {
//   return Promise.resolve("I love Resolving");
// }

// const prom = Promise.resolve([10, 20, 30, 40]);
//     prom
//     .then((nums) => nums.map((num) => num * 10))
//     .then(transformedNums => console.log(transformedNums));


// const anotherProm = Promise.resolve({text:"resolved"})
// anotherProm.then(data => console.log(data))


// Promise.reject()
// .then(res =>{
//     return Promise.reject("rejected inner promises")
// },err =>{
//     console.log("rejected")
// }).catch(data => console.log(data))


function timeLogger(message,time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(message)
    },time)
    if(typeof message !== "string" && typeof message !== "number"){
      reject()
    }
  })
}

// timeLogger("first", 1000)
// .then(message => {
//   console.log(message)
//   return timeLogger("second", 800)
// }).then(message =>{
//   console.log(message)
//   return timeLogger("third", 100)
// }).then(message =>{
//   console.log(message)
//   return timeLogger("fourth", 300)
// }).then(message=>{
//   console.log(message)
// })
// .catch(err => console.log(err))

// Promise.resolve("hi")
//   .then(string =>{
//     return string + " there"
//   }).then(string=>{
//     console.log(string)
//   })

// const p1 = new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("A")
//   },2000)
// })
// const p2 = Promise.resolve("B")
// const p3 = Promise.resolve("C")


// Promise.all([p1,p2,p3])
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

