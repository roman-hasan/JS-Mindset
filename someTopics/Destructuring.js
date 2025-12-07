// Destructuring 

// Destructuring হলো এমন একটা টেকনিক,
// যার মাধ্যমে আমরা array বা object থেকে মান (value) বের করে
// আলাদা ভ্যারিয়েবলে খুব সহজে রাখতে পারি 

// old way
// const number = [10, 20, 30, 40, 50]
// const a = number[0]
// const b = number[1]
// const c = number[2]

// es6
// const[a, b, c,...some]= number
// console.log(a,b,c)
// console.log(...some)

// const user = {
//     name: 'Roman',
//     age: 22

// }

// const name = user.name
// const age = user.age
// console.log(name, age)

// const {name, age} = user
// console.log(name, age)

// const {name: userName, age: userAge} = user
// console.log(userName, userAge);

// default value
// const {city = 'Dhaka', subject = 'English'} = user
// console.log(city, subject)

// nested object destructuring

const nested = {
    user1: {
        name: "Sakib",
        subject: 'English',
        prof: 'Programmer',
        skill: ['Html', 'Css', 'Js', 'React', 'Next Js']
    }
    
}

// const {user1:{name: username, subject, prof:userProf}} = nested
// console.log(username, subject, userProf);


// function printUser({name, age}){
//     console.log(`${name} is ${age} years old`)
// }

// const user = {name: 'Rafi', age: 22}
// printUser(user)

// const people = [
//     {
//         name: 'Rafi',
//         age: 22
//     },
//     {
//         name: 'Sami',
//         age: 15
//     }
// ]

// const [{name:firstName, age:fistAge}, {name:secondName, age:SecondAge}] = people
// console.log(firstName, SecondAge);

const response = {
    status: 200,
    data: {
        user:{
            name: 'Rafi',
            email: "rafi@gmail.com",
            address:{
                city: 'Dhaka',
                zip: 1207
            }
        }
    }
}

// const city = response.data.user.address.city
// console.log(city)

// const {data:{user: {name, email, address: {city}}}} = response
// console.log(city);


// . Rest Operator (...)

// function sum(a,b,c ){
//     return a + b + c
// }
// console.log(sum(1, 2, 3));
//  in es6***********
// function sum2(...numbers){
//     return numbers.reduce((acc, num)=> acc + num, 0)
// }

// console.log(sum2(1, 2, 3, 4, 5))

// const arr = ['Roman', 'Hasan', 'true', 'Fayez', 'Nuhail', 'Ki obosta']
// const [first, , Third, ...spread] = arr
// console.log(first, Third,...spread);

// const nums = [1, 2, 3]
// const copy = [...nums]
// copy.push(4,5,6)
// console.log(copy);
// console.log(...nums)


// const a = [1, 2]
// const b = [3, 4]

// const combined = [...a, ...b]
// console.log(combined)

// const fruits = ['Apple', 'Mango']
// const moreFruits = ['Banana', 'kiwi',...fruits, 'lemon']
// console.log(moreFruits)

// ***********Property shorthand

// const name = 'Rafi'
// const age = 22

// const user = {
//     name: name,
//     age: age
// }

// console.log(user)

// const user = {
//    name,
//    age,
// }

// console.log(user)

// *********Method shorthand

// const user = {
//     name: 'Rafi',
//     greet: function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// user.greet()


// const user = {
//     name: 'Rafi',
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// user.greet()



// Computed Property Names
// const key = "email";

// const user = {
//   name: "Rafi",
//   [key]: "rafi@gmail.com"
// };

// console.log(user);

// const name = 'Sami';
// const age = 21;
// const field = 'developer'

// const user = {
//     name,
//     age,
//     [field]: true,
//     greet(){
//         console.log(`Hi I'm ${this.name}, a ${field}!`)
//     }
// }
// console.log(user)
// user.greet()



