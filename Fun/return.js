// Return Statement

// function name(firstName, lastName, gender){
//     var output;
//     if(gender === 'male'){
//         output = 'Mr. ' + firstName + ' ' + lastName
//     } else if(gender === 'female'){
//         output = 'Ms. ' + firstName + ' ' + lastName
//     }
//     return output
// }

// var fullName = name('Nuhail', 'Fayez', 'male')
// console.log(fullName)

// function example(){
//     return{
//         name: 'Nuhail Fayez',
//         skill: ['Java', 'JavaScript'],
//         print: function(){
//             console.log(this.name, this.skill)
//         }
        
//     }
// }

// var obj = example()
// console.log(obj)



// function num(){
//     return 10
// }

// console.log(num());

// function obj(){
//     return{
//         name: 'Roman',
//         age: 21,
//         subject: 'English'
//     }
// }

// console.log(obj().subject)

// function arr(){
//     return [1, 2, 3]
// }

// console.log(arr()[1])

// function fn(){
//     return function(){
//         return 'h1'
//     }
// }

// console.log(fn()())

// // nested 
// function nest(){
//     return[
//         {
//             name: 'Nuhail Fayez',
//             age: 21,
//             subject: 'English',
//             score: 89
//         },
//         {
//             name: 'Roman hasan',
//             age: 20,
//             subject: 'Bangla',
//             score: 71
//         },
//         {
//             name: 'Tutul',
//             age: 18,
//             subject: 'ICT',
//             score: 99
//         },
//         {
//             name: 'Eshan',
//             age: 23,
//             subject: 'Math',
//             score: 95
//         },
//     ]
//     console.log('This will not work')
// }

// console.log(nest()[0].subject)


// function divide(a,b){
//     if(b === 0) return null
//     return a / b

// }
// console.log(divide(10, 0));


// ***********Return (Clear Points) ****************

// 1) Return function-এর output বাইরে পাঠায়

// function giveNumber(){
//     return 10
// }
// console.log(giveNumber())

// function sum(a,b){
//     return a + b
// }
// let res = sum(10, 70)
// console.log(res)

// function greet(name){
//     return `Hello ${name}`
// }
// console.log(greet('Roman Hasan'))

// function isAdult(age){
//     return age >= 18
// }

// console.log(isAdult(20))
// console.log(isAdult(10))

// 2) Return function কে তাৎক্ষণিক থামিয়ে দেয়

// function test(){
//     console.log('A')
//     return
//     console.log('B')
// }
// test()

// function checkAge(age){
//      if(age < 18){
//         return('You are under age')
//      }
//      console.log('This will run only if age >= 18')
//      return 'Adult'
     
// }

// console.log(checkAge(19))

// function findEven(numbers){
 
//   for(let n of numbers){
//       if(n% 2 === 0) {
//         return n
//       }
//   }
//   return 'No even number'


// }

// console.log(findEven([11, 5, 9, 20, 4]))

// function login(user){
//     if(!user) return 'user is not found'
//     if(!user.emailVerified) return 'Verify email'
//     if(!user.passwordCorrect) return 'Wrong password'
// }
// // console.log(login(''));
// console.log(login({
//     emailVerified: false,
//     passwordCorrect: 2132
// }));


// 3) Return ছাড়া function-এর value always undefined

// function greet(){
//     console.log('Hello world')
// }
// const result = greet()
// console.log(result)

// function sum(a,b){
//     const total = a + b
//     // console.log(total)
//     return total
// }
// const result = sum(10, 10)
// console.log(result)

// 4) Return শুধু একটাই value দিতে পারে

// function giveNumber(){
//     return 10
// }
// const result = giveNumber()
// console.log(result)

// function sumAndSubtract(a,b){
//     const sum = a + b
//     const diff = a - b
//     return sum
// }
// console.log(sumAndSubtract(10, 20))


// function greet(name){
//     const msg = `Hello ${name} `
//     return msg
// }
// console.log(greet('Roman'))


// 5) Return condition এর ভিতর থেকেও দিতে পারো

// function checkAge(age){
//     if(age < 18){
//         return 'Underage'
//     }
//     return 'Adult'
// }
// console.log(checkAge(16))

// function grade(score){
//     if(score >= 80) return 'A+'
// }

// function grade(score){
//   if(score >= 80) return 'A+'
//   if(score >= 60) return 'B'
//   if(score >= 40) return 'C'
//   return 'F'
// }
// console.log(grade(75))

// function isEven(num){
//     if(num % 2 === 0) return num * 2
//     return 'This not a even number'
// }
// console.log(isEven(100))

// function login(user){
//   if(!user.email) return 'please enter your email' 
//   if(!user.email.includes('@')) return 'Enter your valid email'
//   if(!user.password) return 'please enter your password'
//   return 'Login successfully'
// }

// console.log(login({
//     email: 'roman@gmail.com',
//     password: 2313
// }))

// function validateProduct(product){
//     if(!product.name) return 'Product name required'
//     if(product.price <= 0) return 'Price must be positive'
//     if(!product.category) return 'Category missing'
//     return 'Valid product'

// }
// console.log(validateProduct({
//     name:'Mobile',
//     price: 100,
//     category: 'Electronics'
// }))


// 6) Return loop-এর ভিতর থেকেও function থামাতে পারে

// function findEven(numbers){
//     for(let num of numbers){
//         if(num%2 === 0) return num
//     }
// }
// console.log(findEven([11, 13, 18, 10, 4, 66]))

// function getCartTotal(cart){
//     let total = 0

//     for(let item of cart){
//         // console.log(item)
//         if(!item.price || item.price < 0) return 'Invalid item detected'
//         total += item.price
//     }

//     return total
// }

// console.log(getCartTotal([
//     {name: 'phone', price: 500},
//     {name: 'case', price: 10}
// ]))



// 7) Return দিয়ে function থেকে আরেকটা functionও পাঠানো যায়

// function outer(){
//     return function inner(name){
//         return `Hi ${name}`
//     }
// }

// const fn = outer()
// console.log(fn('Roman'))


// function counter(){
//     let count = 0
//     return function(){
//         count ++
//         return count
//     }
// }

// const inc = counter()
// console.log(inc())

// function bankAccount(){
//     let balance = 1000
//     return{
//         deposit(amount){
//             balance += amount
//             return balance
//         },
//         getBalance(){
//             return balance
//         }
//     }
// }

// const acc = bankAccount()
// console.log(acc.deposit(200))
// console.log(acc.getBalance(200))

// 8) Return দিয়ে object পাঠালে private data expose না করেই access দেওয়া যায়

// function box(){
//     let secret = 'A secret message'
//     return{
//         get(){
//             return secret
//         }
//     }
// }

// let b = box()
// console.log(b.get())


// function box(){
//     let secret = 'A secret message'
//     return{
//         read(){
//             return secret
//         },
//         write(newValue){
//             secret = newValue
//         }
//     }
// }
// const b = box()
// console.log(b.read())
// b.write('new message')
// console.log(b.read())


// function createCart(){
//     let items = []
//     return{
//         add(product){
//             items.push(product)
//             return items
//         },
//         total(){
//             return items.reduce((sum, item)=> sum + item.price, 0)
//         },
//         getItems(){
//             return [...items]
//         }
//     }
// }
// const cart = createCart()
// cart.add({name: 'shirt', price: 800})
// cart.add({name: 'pant', price: 500})
// console.log(cart.getItems())
// console.log(cart.total())


// 9) Return recursion এর base condition এ function বন্ধ করতে ব্যবহার হয়
// ****note**** Recursion = Function নিজের ভেতর নিজেকেই কল করে।

// function countDown(n){
//     if(n === 0) return
//     console.log(n)
//     return countDown(n - 1)
// }
// countDown(5)

// function count(n){
//     if(n > 5) return
//     console.log('Number:', n)
//     return count(n + 1)
// }

// count(1)

// 10) Return দিয়ে multiple time different result পাঠানো যায় (different conditions)


// function getAccess(role){
//     if(role === 'admin') return 'Full Access';
//     if(role === 'moderator') return 'Partial Access'
//     if(role === 'user') return 'Basic Access'
//     return 'No access'
// }
// console.log(getAccess('moderator'))

// 11) Return functionকে reusable করে
// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 10));   // 15
// console.log(add(100, 20)); // 120
// console.log(add(1, 2));    // 3

// 12) Return asynchronous function-এ value promise হিসেবে পাঠায়

// async function test() {
//   return 10
// }
// console.log(test())

// **note** async function return করলে সেই value → Promise resolve করে।

// async function test(){
//   return 'Roman'
// }
// test().then(res=>{
//   console.log(res)
// })

// async function getUser(params) {
//   return {name: 'Roman', age: 20}
// }
// getUser().then(user=>{
//   console.log(user)
// })

// async function getNumber(params) {
//   return 50
// }
// async function show() {
//   const res = await getNumber()
//   console.log(res)
// }
// show()


// 13) Return chaining possible করে - function return করে object

// const obj = {
//    hello(){
//     console.log('Hello')
//     return this
//    },
//    world(){
//     console.log('World')
//     return this
//    }


// }
// obj.hello().world()


// 14) Return function-এর final answer (output) define করে

// function test() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;

//   return sum;
// }
// console.log(test()); 

// 15) Return ছাড়া function logic complete হলেও output invalid হয়


// function getDiscount(price) {
//   const discount = price * 0.1;
//   const finalPrice = price - discount;
//   // return finalPrice
// }

// console.log(getDiscount(1000)); 
