// practice some methods for React

// map : map always return new array 
const undefinedArray = [1, 2, 3].map(n => {})
// console.log(undefinedArray)

const users = [
    {id: 1, name: 'Roman'},
    {id: 2, name: 'Sohan'}
]

const updated = users.map(user =>({
    ...user,
    age: 20,
    country: 'Bangladesh'
}))


// console.log(updated)

const nums = [1, 2, 3, 4, 5]
const result = nums.map(n=> n % 2 === 0 ? n * 2 : n)
// console.log(result)


// filter
const num = [1, 2, 3, 4, 5, 6];
const evens = num.filter(n => n % 2 === 0);
// console.log(evens)

const users1 = [
  {id:1, active:true , age: 21},
  {id:2, active:false, age: 13 },
  {id:3, active:true, age: 18}
];

// const activeUsers = users1.filter(u => u.active)
const activeUsers = users1.filter(u => u.age >= 18 && u.active)
// console.log(activeUsers)

// reduce
const cart = [
  {item: 'Book', price: 200},
  {item: 'Pen', price: 50},
  {item: 'Beg', price: 800}
]
const total = cart.reduce((acc, cur)=> acc + cur.price, 0)
// console.log(total)

// find
const products = [
  {
    id: 101,
    title: "iPhone 14",
    category: "mobile",
    price: 90000,
    specs: {
      ram: "6GB",
      storage: "128GB",
      colors: ["black", "blue", "gold"]
    }
  },
  {
    id: 102,
    title: "Samsung S21",
    category: "mobile",
    price: 70000,
    specs: {
      ram: "8GB",
      storage: "256GB",
      colors: ["white", "black"]
    }
  }
];

const product = products.find(p => p.title.toLowerCase().includes('iphone'))
const whitePhone = products.find(p =>p.specs.colors.includes('white'))
// console.log(product)
// console.log(whitePhone)
const device = products.find(p=>
  p.specs.ram === '6GB' || p.specs.ram === '8GB'
)

// console.log(device)

// console.log(Boolean(''))

// for in loop - for Object iterate

// for (let key in object){
//   console.log(key, object[key])
// }


// const user = {
//   name: 'Roman',
//   age: 25
// }

// const key = 'name'
// console.log(user[key])

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30

// }

// for(let key in obj){
//   console.log(key)
//   console.log(typeof key)
//   console.log(obj[key])
// }

// const user ={
//   name: 'roman',
//   age: 24,
//   role: 'admin'
// }

// for(let key in user){
//   console.log(key, ":", user[key])
// }

// Object-এর ভিতরের object

// const config = {
//   server: 'localHost',
//   db: {user: 'root', pass: 124}
// }

// for(let key in config.db){
//   console.log(key,":",config.db[key])
// }



// for of - Array iterate

// for(let value of array){
//   console.log(value)
// }

const names = ['roman', 'akash', 'nadim']

for(let value of names){
  // console.log(value)
}

// array of objects: -

const usersList = [
  {id: 1, name: 'roman'},
  {id: 2, name: 'Akash'}
]

for(let user of usersList){
  // console.log(user.name)
}

for(let char of 'Nuhail fayez'){
    // console.log(char)
}

// const user = { name: "Roman", age: 25 };
// console.log(Object.keys(user))

// for (let key of Object.keys(user)) {
//   console.log(key);
// }

// for(let value of Object.values(user)){
//   console.log(value)
// }


// for(let [key,value] of Object.entries(user)){
//   console.log(key, ":",value)
// }

// console.log(Object.entries(user))

// const user2 = {
//   name: 'roman',
//   age: 25,
//   city: 'Dhaka'
// }

// const user3 = {
//   name: 'Nuhail Fayez',
//   age: 25,
//   city: 'Dhaka'
// }

// Object.entries(user).map(([key,value])=>{
//   console.log(key, ':', value)
// })



// *********** Play with object ******************

// Object.entries — Without Destructuring

const user = {
  name: 'Roman',
  age: 25,
  city: 'Dhaka'
}

const entries = Object.entries(user)
// console.log(entries)

for(let item of entries){
  //  console.log(item)
  //  console.log('key:', item[0])
  //  console.log('value:', item[1])
}

for(let [key, value] of entries){
  //  console.log(item)
  //  console.log('key:', item[0])
  //  console.log('value:', item[1])
  console.log(key,value)
}

