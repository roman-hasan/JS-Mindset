// function sum(a,b){
//     return a + b
// }
// console.log(sum(5, 4))

// function outer(){
//      console.log('outer')
//     return function inner(){
//         console.log('inner')
//     }
//     // inner() // 1st way
 
// }
// let x = outer()
// x() // to execute inner function it't called closure


// function O(){
//     function i(){
//         function j (){
//              function k(){
//                  console.log('k')
//             }
//             k()
//         }
//         j()
//     } 
//     i()
// }
// O()

// ******** outer function and inner function rules :-

// function baba(){
//     var bari = 'Shantiniketon';
//     function chele(){
//         bari = 'AnondoNiketon'
//         var scooter = 'Activa'
//         console.log(bari)
//     }
//     chele()
//     // console.log(scooter) // can't be access any variable value of inner function but inner function can access any value value of outer Function
// }
// baba()


// function outer(x){
//     function inner(y){
//         if(x > 1){
//             console.log(y)
//         } else{
//             console.log(y * 2)
//         }
//     }
//     inner(3)
// }
// outer(4)

// function baba(hasBairerLokerInput){
//     var bari = 'Shantiniketon';
//     function chele(){
//         if(!hasBairerLokerInput){
//             bari = 'AnondoNiketon'
//         }
//         var scooter = 'Activa'
//         console.log(bari)
//     }
//     chele()
    
// }
// baba(true)



// function baba(){
//     var bari = 'Shantiniketon';
//     return function chele(){
//         bari = 'AnondoNiketon'
//         var scooter = 'Activa'
//         console.log(bari)
//     }
// }
// let amarChele = baba() 
// amarChele()



// ****** pure practice:- ******

// function outer(){
//     var x = 10;
//     function inner(){
//         console.log(x)
//     }
//     x = 20
//     return inner
// }

// var innerFun = outer()
// innerFun()


// function outer(){
//     var x = 10
//     function inner(){
//         var y = 5
//         console.log(x + y);
//     }
//     var x = 20;
//     return inner;
// }

// var innerFun = outer()
// innerFun()

// IIEF

// function x(a){ // normal fun
//     console.log(a)
// }
// x(10)

// (function x(a){
//     console.log(a)
// })(1212)


// (function outer(x){
//     return (function inner(y){
//         console.log(x)
//     }) (105);
// }) (100)


// let count = 0;
// (function logCount(){
//     if(count === 0){
//         let count = 1
//         console.log(count)
//     }
//     console.log(count)
// })()

// for(var i = 0; i< 5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000);
// }


