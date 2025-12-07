// function outer(){
//     var a = 10
//     function inner(){
//         console.log(a)
//         console.log('I am inner function')

//     }
//     inner()
//     console.log('Iam outer Function')


// }

// outer()


function add(a,b){ // inner function can access outer function variables or parameters

    function add(){
        return a + b
    }
    function sub(){
        return a - b
    }
    function times(){
        return a * b
    }
    function div(){
        return a/b
    }
    return add() + sub() + times() + div()
}

var result = add(10, 5)
console.log(result)





