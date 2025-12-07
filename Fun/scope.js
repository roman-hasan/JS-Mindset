// Global scope
// Local Scope or Functional Scope
// Block Scope

{
    // block scope
}

// ********* global scope:- *********

// const globalVariable = 'This is a Global variable' // always declare global variable using const keyword it is safe
// function doSomething(){
//     console.log(globalVariable)
// }
// doSomething()


// function doSomething(){ // this is function scope so we can't access any variable (let,var, const) value outside the function 
//     var count = 10
// }

// console.log(count)


// ************ function scope :- *************

// var count = 20
// let greeting = 'Hello'

// inner function is called outer function scope

// function doSomething(){ // this function declare into global scope
//     let items = 30
//     console.log(count, greeting)
//     console.log(items)

// }
// doSomething()


// var greeting = 'hello'

// function showGreeting(){
//     var greeting = 'How are you';
//     console.log(greeting)
// }
// showGreeting() // after function execute greeting variable value will be death
// console.log(greeting)

// ************ block scope :- *************
{
    let x = 10;
}

// console.log(x)

// if(true){
//     var x = 30
// }
// console.log(x)

// for(let i=0; i<= 5; i++){ 
//     // console.log(i)
// }
// console.log(i)
// i = 1000
// console.log(i)
// i = 10000000
// console.log(i)



// ********* Scope chain :- *********

// function sayName(){
//     greeting()
// }

// const x = 30
// function greeting(){
//      const count = 10;
//      console.log(x)
// }
// greeting()


// ex-1
// function jerry(){
//     console.log(name);
// }

// function tom(){
//     var name = 'tom';
//     jerry()
// }
// var name = 'cartoon'
// tom()

// ex-2
var count = 10;

function outer(){
    // var count = 20;
    function inner(){
        // var count = 30;
        console.log(count)
    }
    inner()
    console.log(count)
}
outer()
console.log(count)

