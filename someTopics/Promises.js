// const myPromise = new Promise((resolve, reject)=>{
//     console.log(typeof resolve) // resolve and reject they both are function
//     console.log(typeof reject)
// })


// const myPromise = new Promise((resolve, reject)=>{
//     let dataLoaded = true
//     if(!dataLoaded){
//         resolve('Data loaded succesfully!')
//     }else{
//         reject('Data Loading failed!')
//     }
// })

// myPromise
// .then(result => console.log(`Result: ${result}`))
// .catch(error => console.log(`Error: ${error}`))


// Promise Chaining & Error Handling

// new Promise((resolve, reject)=>{
//     resolve(10)
// })

// .then(num =>{
//     console.log('Step 1', num)
//     return num * 2
// })

// .then(num =>{
//     console.log('Step 2:', num)
//     return num + 5
// })

// .then(num=>{
//     console.log('Step 3', num)
// })


// new Promise ((resolve, reject)=>{
//     resolve('Step 1 Done')
// })

// .then(msg =>{
//     console.log(msg)
//     return new Promise (resolve =>{
//         setTimeout(()=>{
//             resolve('Step 2 Done (after 2s)')
//         }, 2000)
//     })

// })

// .then(msg =>{
//     console.log(msg)
//     return 'Step 3 Done'
// })

// .then (msg => console.log(msg))


// new Promise((resolve, reject)=>{
//     reject('Something went wrong ')
// })

// .then(()=> console.log('This will not run'))
// .catch(err=>console.log('Caught', err))
// .then(()=>console.log('After catch, chain continue'))

// new Promise((resolve, reject)=>{
//     resolve('Start')
// })

// .then(msg =>{
//     console.log(msg)
//     throw new Error('Oops!')

// })

// .catch(err=>console.log('Caught Error:', err.message))


// Multiple .catch()

// new Promise((resolve,reject)=>{
//     resolve('Step 1')
// })

// .then(msg =>{
//     console.log(msg)
//     throw new Error('Step 2 Failed!')
// })

// .catch(err=>{
//     console.log('Caught in first catch:', err.message)
//     return 'Recovered value'
// })

// .then(msg=>{
//     console.log('Step 3:', msg)
// })


// new Promise((resolve, reject)=>{
//     resolve('Data Loaded!')
// })

// .then(msg => console.log(msg))
// .catch(err => console.log('Error', err))
// .finally(()=>console.log('Cleaning up...'))

// console.log('Promise Chaining Practice Started!')

// const myPromise = new Promise((resolve, reject)=>{
//     console.log('Step 1 started....')
//     setTimeout(()=>{
//         const success = false
//         if(!success){
//             resolve('Step 1 done!')
//         }else{
//             reject(`Step 1 failed!`)
//         }
//     }, 1000)
// })
// myPromise
// .then(result1=>{
//     console.log(result1)
//     console.log('Step 2 Started!')
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('Step 2 done!')
//         }, 2000);
//     })
// })

// .then(result2 =>{
//     console.log(result2)
//     console.log('Step 3 started!')
//     throw new Error('Something went wrong')
// })

// .catch(err=>{
//     console.log(err)
// })

// **********************************confusing part***************************************************

// const p1 = new Promise((resolve)=>{
//     resolve('Manual Success!')
// })
// p1
// .then(res=>{
//     console.log(res)
// })

// const p2 = Promise.resolve('Shortcut Success!!')
// p2
// .then(res=>{
//     console.log(res)
// })


// step 1: Constructor
// function Person(name){
//     this.name = name
// }

// const p1 = new Person('Roman')
// console.log(p1);

// const myPromise = new Promise((resolve, reject)=>{
//     resolve('Done!')
// })

// console.log(typeof myPromise)
// console.log(typeof Promise)

// 1️⃣ Promise.all()

// const p1 = Promise.resolve('Burger Ready!')
// const p2 = Promise.resolve('Fries Ready!')
// const p3 = Promise.resolve('Drink Ready!')

// Promise.all([p1,p2,p3])
// .then(results=>{
//     console.log(results);
    
// })
// .catch(err=>{
//     console.log(err)
// })

// 2️⃣ Promise.allSettled()
// const p1 = Promise.resolve('Success 1')
// const p2 = Promise.reject('Fail 2')
// const p3 = Promise.resolve('Success 3')

// Promise.allSettled([p1, p2, p3]).then(res=>{
//     console.log(res)
// })


// 3️⃣ Promise.race()

// const p1 = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("⚡ Fast"), 1000));

// Promise.race([p1, p2])
//   .then(result => console.log("Winner:", result))
//   .catch(error => console.log("Error:", error));


// 4️⃣ Promise.any()

// const p1 = Promise.reject("❌ Failed 1");
// const p2 = Promise.resolve("✅ Success 2");
// const p3 = Promise.reject("❌ Failed 3");

// Promise.any([p1, p2, p3])
//   .then(result => console.log("First success:", result))
//   .catch(err => console.log("All failed:", err));


// async function greet(){
//     return 'Hello Roman Boss!'
// }

// greet().then(res => console.log(res))

// function getData(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('Data Loaded!')
//         }, 2000)
//     })
// }

// async function ShowData() {
//     console.log('Data is Coming')
//     const result = await getData()
//     console.log(result)
//     console.log('All is Done!')
// }

// ShowData()


// Error Handling with try and Catch


// function getUser(){
//     return new Promise((resolve, reject)=>{
//         const success = false
//         setTimeout(()=>{
//             if(success) resolve('User found!')
//             else reject ('User not found!')
//         }, 1500)
//     })
// }

// async function showUser() {
//     try{
//         console.log('Finding user...')
//         const user = await getUser()
//         console.log(user)
//     } catch(err){
//         console.log('Error:', err)
//     } finally{
//         console.log('Done checking user!')
//     }
// }

// showUser()

// ********************** then() style promise chain***************

// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve('Step 1 done'),1000)
//     })
// }

// function step2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> reject('An error!!!!!!', 1000))
//     })
// }

// function step3(){
//     return new Promise(resolve=>{
//         setTimeout(()=> resolve('Step 3 done'),1000)
//     })
// }

//!!!!!!!!!! old then chain - problem!!!!
// step1()
// .then(res=>{
//     console.log(res)
//     return step2()
// })
// .then(res2=>{
//     console.log(res2)
//     return step3()
// })
// .then(res3=>{
//     console.log(res3)
//     console.log('All steps complete!')
// })

// **********new easy to underStand***********

// async function runAllSteps() {
//     try{
//         const res1 = await step1()
//         console.log(res1)
        
//         const res2 = await step2()
//         console.log(res2)

//         const res3 = await step3()
//         console.log(res3)

//     } catch(err){
//         console.log('Error:', err)
//     }
//     finally{
//         console.log('All step checking completed')
//     }
    
// }
// runAllSteps()


// ******** Nested async calls (Chaining of async functions)

// async function taskA() {
//     console.log('A started......')
//     return('Task A done')
// }

// async function taskB() {
//     console.log('B started...')
//     const resA = await taskA()
//     console.log('Be got:', resA)
//     return 'Task B done'
// }

// async function main() {
//     try{
//         const result = await taskB();
//         console.log('Main got: ', result)
//     }
//     catch(err){
//         console.log('Error:', err)
//     }
// }

// main()

// async function a() { return 'A' }
// async function b() { return 'B' }
// async function c() { return 'C' }

// async function run() {
//     const x = await a()
//     const y = await b()
//     const z = await c()
//     console.log(x, y, z)
// }

// run()



// async function taskA(){
//     console.log('A is started....')
//     throw new Error('Task a failed!')
// }

// async function taskB() {
//     console.log('B started....')
//     const resA = await taskA()
//     console.log('B got:', resA)
//     return 'Task B done'
// }

// async function main() {
//     try{
//         const result = await taskB()
//         console.log('Mani got:', result)
//     }catch(err){
//         console.log('Error:', err.message)
//     }
// }

// main()

