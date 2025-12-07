// arr copy
const arr = [1, 2, 3];
const copy = [...arr];

// arr merge
const x = [1, 2];
const y = [3, 4];

const mergedArr = [...x, ...y];



// obj copy
const user = {
    name: 'roman',
    id:1
}

const copyObj = {...user}
// console.log(copyObj)

// obj merge

const a = {x: "a"}
const b = {y: 'b'}
const merged = {...a, ...b}
// console.log(merged)

// Overwrite / override
const person = {
    name: 'roman',
    age: 18
}

const updated = {
    ...person,
    age: 21
}

console.log(updated)

// Spread Operator = Shallow Copy

const user2 = {
    name: 'Nuhail Fayez',
    address: {city: 'Dhaka'}
}
const copy2 = {...user2}
copy2.address.city = 'Barishal'
// console.log(copy2)

// Nested Spread

const user3 = {
    name: 'Nuahai Fayez',
    address: {
        city: 'London',
        zip: 1234
    }
}

const updated3 = {
    ...user3,
    address: {
        ...user3.address,
        city: 'Cittagong'
    }
}
console.log(updated3)