// Todays Topics

function sayName(name){
    return 'Hello', name;
}

// 1. A Function can be stored in a Variable * Passed
 let hello = sayName;
//  let fun = sayName('Nuhail Fayez')
//  console.log(hello)
//  console.log(fun)

// console.log(hello('Nuhail Fayez'))

var anotherHello = hello;
console.log(anotherHello('Hello Fayez'))



// 2. A Function can be stored in an Array * Passed

let arr = [1, 2, 3, anotherHello]
arr.push(sayName)
console.log(arr)


// 3. A Function can be stored as an Object Field or Property * Passed
let obj = {
    name: 'Nuhail Fayez',
    sayName: hello,
    print: function(){
        console.log('Hi')
    }
}
console.log(obj)

// 4. We can create function as needed  * Passed

var sum = 10 + (function(){return 20})();
console.log(sum)


// 5. We can pass function as an arguments  * passed

function wow(name, fun){
    return fun(name);
}
var result2 = wow('Nuhail Fayez', sayName)
console.log(result2)

// 6. We can return function from another function
function base(b){
    return function(n){
        var result = 1 
        for(var i = 0; i<b; i++){
            result *= n
        }
        return result;
    }
}
// var power = base(2)
// console.log(power(10))

var result3 = base(3)(5)
console.log(result3)