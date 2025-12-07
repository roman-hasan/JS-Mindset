// function greet(){
//     console.log('Hello!')
// }

// greet()

// Function Hoisted

sayHello() // it's wil work because of hoisting!!
function sayHello(){
    console.log('Say Hi')
}

// Function Expression (Hoisted হয় না)

// sayHi() // error
const sayHi = () => {
    console.log('Hi')
}
