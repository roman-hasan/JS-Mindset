// **OBJECT IN ARRAY**

// let student = [
//     {name: 'Roman', age:20},
//     {name: 'Abir', age:16},
//     {name: 'Eshan', age:19},
//     {name: 'salman', age:25},
//     {name: 'tutul', age:35},
// ]

// console.log(student[2].name)

// **ARRAY IN OBJECT**

// let student = {
//     name: 'nuhail',
//     age: 20, 
//     hobbies: ['cricket', 'FootBall', 'Gaming']

// }

// console.log(student.hobbies[2])

// **FUNCTION IN ARRAY**

// let person = {
//     name: 'karim',
//     age: 21,
//     greet: function(){
//         console.log('Helo my name is ' + this.name)
//     }
// }

// person.greet()

// **In Es6**

// let person = {
//     name: 'karim',
//     age: 21,
//     greet(){
//         console.log('Helo my name is ' + this.name)
//     }
// }

// person.greet()

// **FUNCTION IN ARRAY**

// let items = [
//     'apple',
//     100,
//     true,
//     function(){
//         console.log('Iam a function inside an array!');
        
//     }
// ]

// items[3]()

// let actions = [
//     function(a,b){
//         return a + b
//     }
// ];

// let result = actions[0](5,10)
// console.log(result)

// Nested structure (Array + Object + Function)

// let data = [
//     {
//         name: 'Rohim',
//         age: 20,
//         hobby: ['Cricket', 'Football', 'Reading'],
//         greet(){
//             console.log(`Hi, Iam ${this.name}`)
//         }
//     },
//     {
//         name: 'karim',
//         age: 22,
//         hobbies : ['Football', 'Gaming'],
//         greet(){
//             console.log(`Hello my name is ${this.name}`)
//         }
//     }
// ]

// data[0].greet()

// more example
let student = [
    {
        name: 'Rahim',
        age: 20,
        scores: [80, 90, 75],
        greet(){
            console.log(`Hi, Iam ${this.name}`)
        },
        
    },

    {
        name: 'karim',
        age: 22,
        scores: [70, 75, 80],
        greet:function(){
            console.log( `My name is ${this.name}`)
        },
        averageScore(){
            return this.scores.reduce((a,b)=> a+b, 0)
        }

    }
   
]

student[0].greet()
console.log(student[1].averageScore())

