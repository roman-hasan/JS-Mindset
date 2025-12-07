// task 1:-
function myName(){
    console.log('Nuhail Fayez')
}

// myName()

// task 2:-
function sum(a, b){
    return a + b
}

var result = sum(10, 20)
// console.log(result)

// task 3:-

function maxNumber(a,b){
    if(a > b){
        return a
    } else{
        return b
    }
}

// console.log(maxNumber(10, 20))


// task 4:-
// function square(num){
//     return num * num
// }

// console.log(square(5))

// task 5:-
function checkEvenOdd(c){
     if(c % 2 === 0){
        console.log('Even')
     } else{
        console.log('Odd')
     }
}

// checkEvenOdd(4)

// task 6:-
function celsiusToFahrenheit(c){
      var convert = c * 9/5 + 32
      return convert;
}

// console.log(celsiusToFahrenheit(100))

// task 7:-
function greetWithAge(name, age){
    console.log(`Hello ${name}, you are ${age} years old`)   
}
// greetWithAge('Nuhail Fayez', 20)



// task 8:-
function double(d){
    return d * 2;
}

// console.log(double(5))
// console.log(double(12))



// ******* Nested Functions :-

function grandParent(){
    let gp = 'Iam Grand Parent'

    function parent(){
        let p = 'Iam parent'

        function child(){
            console.log(gp)
            console.log(p)
            console.log('Iam child')
        }
        child()
    }
    parent()
}
// grandParent()

// Practice task:-

// task 1
function outerFun(myName){
    function innerFun(){
         console.log('Welcome', myName)
    }
    innerFun()
}
// outerFun('Nuhail Fayez')

// task 2
function square(s){
     function doSquare(){
          let math = s * s
          console.log(math)
     }
     doSquare()
}
// square(3)

// task 3
function userInfo(name, age){
    function innerInfo(){
        console.log(`Hi Iam ${name}, and Iam ${age} years old`)
    }
    return innerInfo;
}

let innerInfo = userInfo('Nuhail Fayez', 20)
// innerInfo()

// task 4
function additionNum(a,b){
    return function additionFun(){
        console.log(a + b)
    }
}
var somethingAdd = additionNum(10, 30)
// somethingAdd()

// task 5

function reverseStr(str){
     function innerStr(){
        let reversed = str.split('').reverse().join('')
        console.log(reversed)
     }
     return innerStr
}

let output = reverseStr('Nuhail')
// output()


// Higher order Function
function sayHello(){
    console.log('Hello!')
}

function greetUser(func){
    console.log('Starting greeting....')
    func() // === sayHello()
    console.log('Greeting done!')
}
// greetUser(sayHello)


function greeting(name){
    console.log('Hey', name)
}

function processUser(callBack){  // parameters === argument
    console.log('Start processing....')
    callBack('Nuhail Fayez')
    console.log('Processing Done!')
}

// processUser(greeting) // callback() === greeting ()

// console.log('Start Timer')
// setTimeout(function(){
//     console.log('2 seconds later!')
// }, 5000)
// console.log('End Timer')


// যেই function আরেকটা function কে argument হিসেবে নেয় অথবা ফিরে দেয়, তাকে Higher-Order Function বলে।

// যে function argument হিসেবে pass করা হয় এবং পরে Higher-Order Function এর ভিতরে call হয়, তাকে Callback Function বলে।


function greetUser(callBack){
    console.log('Starting greeting')
    callBack()
    console.log('End Greeting')
}
greetUser(function(){
    console.log('Hello Brother!')
})


// Nested Callback
function outer(callbackOuter){
    console.log('outer start')
    callbackOuter(function(){
        console.log('Inner callback running')
    })
    console.log('outerEnd')
}
outer(function(innerCallback){
    console.log('outer callback running')
    innerCallback();
})