// 1) OR (||)

// left truthy → left return  
// left falsey → right return

// console.log( '' || 'Hasan')
// console.log( 'Roman' || 'Hasan')
// console.log(0 || 100)
// console.log(false || 80)
// console.log(null || 'Default')
// console.log(undefined || 'something!!')

// let age = 0

// console.log(age || 'age not provided')


// 2) AND (&&)

// left falsey → left return  
// left truthy → right return

// console.log(10 && 20)
// console.log(0 && 20)
// console.log(true && 'Roman')
// console.log(true && typeof(''))
// console.log(false && 0)

// let isLoggedIn = true
// let username = isLoggedIn && 'Roman'
// console.log(username)

// let age = 19
// let hasNid = true

// let canVote = age > 18 && hasNid && 'You can vote'
// console.log(canVote);


// 3) Not (!) 
// boolean(value) → then reverse it

// console.log(!true)
// console.log(!false)

// console.log(!"Roman"); 
// console.log(!123);     
// console.log(![]);      
// console.log(!{});

// console.log(!0);  
// console.log(!"");     
// console.log(!null);    
// console.log(!undefined); 
// console.log(!NaN);  

// console.log(!!"Roman");
// console.log(!!0);       
// console.log(!![]);     
// console.log(!!null);    



// practice :-

console.log(10 || 0); // 10
console.log(0 || 10); // 10
console.log(5 && 0); // 0
console.log(0 && 5); // 0
console.log("" || "Roman"); // Roman
console.log("Roman" && "Hasan"); // Hasan
console.log(!"Hello"); // false
console.log(!!0); // false

let age = 18
console.log(age>= 18 && 'adult') // adult

let hasNid = false
console.log(hasNid || 'Nid missing') // nid missing

let score = 75;
console.log(score < 80 || 'Try again') // true

let balance = 0
console.log(balance && 'You can buy') // 0

let isDarkMode = null;
console.log(isDarkMode || 'light') // light

// const user = {
//     profile: {
//         name: 'Roman'
//     }
// }

// console.log(user && user.profile && user.profile.name) // roman

const user = null
console.log(user && user.profile ) // null

const settings = {
    theme: '',
    fontSize: 16
}

console.log(settings.theme || 'light') // light


function greet(name){
    return name && 'Hello ' + name
}

console.log(greet('')) // empty string
console.log(greet('Roman')) // Hello Roman

const numbers = [0, 5, 10, 0, 20]
const result = numbers.filter(n => n && n > 5) // [10, 20]
console.log(result)

const users = [
  {name: "Roman", age: 22},
  {name: "Hasan", age: 16},
];

const adult = users.find(u => u.age > 18 || u.name === 'Hasan')
console.log(adult) // {name: 'Roman', age: 22 }