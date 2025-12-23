// revising Es6 one more time

var x = 1;

function test() {
  console.log(x);
  var x = 2;
}

test();

// var x is hoisted into the function scope . So, Global x Ignored

// const getUser= ()=> {name: 'Hasan'}
// const getUser= ()=> {return {name: 'Hasan'}}
// const getUser= ()=> ({name: 'Hasan'})
// console.log(getUser())

// ***** Visual Trick

// () => something        // implicit return
// () => { something }   // function body
// () => ({ something }) // object return


// ************ this in Arrow Function *************
// Arrow function does not have its own this
// Arrow function borrows this (lexical this)

// 1 Normal Function 

// const user={
//   name: 'Hasan',
//   sayHi(){
//     console.log(this.name)
//   }
// }

// user.sayHi()

// 2. Arrow Function
// const user2={
//   name: 'Roman',
//   sayHi: ()=>{
//     console.log(this.name)
//   }
// }

// user2.sayHi()


// 3. What is Lexical This

// const user3 ={
//   name: 'Hasan',
//   sayHi(){
//     // console.log(this)
//     const inner = () =>{
//       console.log(this.name)
//     }
//     inner()
//   }
// }

// user3.sayHi()

// Here's the magic:
// sayHi() → normal function → this = user
// inner() → arrow func → this borrowed from sayHi

// Q. Why isn't this in the arrow function?
// A. Because it uses lexical this from parent scope


// Object বা Array থেকে value বের করে variable বানানো - Destructuring

// Es5
// const user4={
//   name: 'Hasan',
//   age: 24
// }

// const name = user4.name
// const age = user4.age

// Es6
// const {name, age} = user4
// const {name:userName, age:userAge=18} = user4 // rename variable with default value
// console.log(userName)
// console.log(userAge)


// const nums = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = nums;
// console.log(rest); 


// // Nested
// const data = [1, [2, 3]];
// const [x, [y, z]] = data;
// console.log(y); // 2
// console.log(z); // 3


// const person = {
//   name: 'Hasan',
//   age: 25,
//   country: 'BD'
// }

// const {name, ...others} = person
// console.log(name)
// console.log(others)


// *********Error Handling & Debugging in JavaScript********
// console.log('Start')
// console.log(nothing)
// console.log('End')


console.log('Start')
try{
  console.log(nothing)
} catch(err){
  console.log(err.name)
  console.log(err.message)
}
console.log('End')

function divide(a,b){
  if(b === 0){
    throw new Error ('Cannot divide by Zero')
  }
  return a / b
}

try{
  divide(10,0)
}catch(e){
  console.log(e.message)
}

async function fetchUser() {
  try{
    const res = await fetch('')
    const data = res.json()
    console.log(data)
  }catch(err){
    console.log('Error:', err.message)
  }
}