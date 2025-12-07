// const car ={
//     brand: 'Toyota',
//     color: 'Red',
//     speed: 100,

//     drive(){
//         console.log('Car is driving.....')
//     },
//     stop(){
//         console.log('Car stopped!')
//     }
// }

// console.log(car.brand)
// car.drive()
// car.stop()



// ************** 1. Factory Function **************

// function createUser(name, age){
//     return{
//         name,
//         age,
//         greet(){
//             console.log(`Hi Iam ${name} and Iam ${age} years old`)
//         }
//     }
// }

// const p1 = createUser('Nuhail Fayez', 20)
// console.log(p1);
// p1.greet()
// const p2 = createUser ('Sabbir Rahman', 18)
// console.log(p2);
// p2.greet()



// ************* 2. Constructor Function ****************

// function Car(brand, color, speed){
//     this.brand = brand
//     this.color = color
//     this.speed = speed
//     this.drive = function(){
//         console.log(`${this.brand} is driving at ${this.speed} km/h`)
//     }
// }

// const car1 = new Car ('Audi', 'Blue', 225)
// const car2 = new Car ('Toyota', 'red', 120)
// car1.drive()
// car2.drive()



// ************* This keyword *****************
// const car = {
//     brand: 'BMW',
//     drive(){
//         // console.log(this)
//         console.log(`${this.brand}`)
//     }


// }

// car.drive()
// const driveFunc = car.drive
// driveFunc()

// const car2 = {
//     brand: 'Honda',
//     drive: car.drive
// }

// car2.drive()

// ************** New keyword *****************

// function Person(name, age){ 
//     this.name = name
//     this.age = age
//     this.greet = function (){
//         console.log(`Hi Iam ${name} and Iam ${age} years old`)
//     }
// }

// const p1 = new Person('Nuhail Fayez', 20)
// p1.greet()

// Note:***
// new → নতুন object বানালো
// this → সেই নতুন object এর ভিতর property বসালো


// ***********PROTOTYPE:- একটা hidden object ***************
// Prototype = Object এর পিছনে লুকানো পিতামাতা (Parent Object)

// const user = {}
// to see object protoType just use only __proto__
// console.log(user.__proto__)

// const car1 = {
//     speed: 100
// }

// const car2 = {
//     speed: 200
// }

// car1.__proto__.dive = function(){ // this part is totally hidden but we can access this normally
//     console.log(`Driving at ${this.speed}`)
// }

// console.log(car1);

// ProtoType chain**********
// const grandParent = {
//     greet(){
//         console.log('Hello form Grand Parent')
//     }
// }

// const parent = {
//    __proto__: grandParent,
//    walk(){
//     console.log('Parent walking')
//    }
// }

// const child = {
//     __proto__: parent,
//     name: 'Nuhail Fayez'

// }

// console.log(child)


/*************** All about class ***********************/

// class = blueprint
// object = product

// ********** class with constructor *************** /
// 1. constructor and constructor function both are same


// *** Notes about new:-
// new Person(...) constructor কে argument পাঠায়
// object বানানোর জন্য new লাগবেই।
// constructor থাকুক বা না-থাকুক—
// new ছাড়া object তৈরি হবে না।


// class Person{
//     constructor (name){
//         this.name = name
//     }
// }

// console.log(typeof Person)
// Class আসলে function.... wow!!!

// class Score{
//     static compare(p1, p2){
//         return p1 - p2
//     }
// }
// call using object
// let x  = new Score()
// console.log(x.compare(10, 2));

// let res  = Score.compare(10, 2)
// console.log(res);

// question 1:- why we access class property using dot notation
// ans:-
// class is a function
// and in Javascript function is a object
// example:
// function hello(){

// }
// hello.test = 50
// console.log(hello.test);


// class player {
//     constructor (name, score){
//         this.name = name
//         this.score = score
//     }

//     show(){
//         console.log(this.name, this.score)
//     }
// }


// const u1 = new player('Nuhail Fayez', 100)
// u1.show()


// class MathTool {
//   static add(a, b){ // use static keyword when you don't need this keyword 
//     return a + b;
//   }
// }

// let result = MathTool.add(10,20) // if you use static keyword don't need new keyword . because new keyword always return a empty object {} and it related with this keyword
// console.log(result);


// Inheritance :- ******* Extends + super ************

// extends
// class Car extends vehicle{} // this means Car class, Vehicle class-এর সব property + method automatically পেয়ে যাবে।
// super
// super = "parent class কে call করা"

// ********** Step 1: - Parent class ************

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
// }
// ********** Step 2: - Child class  ************
// class Dog extends Animal{
//     constructor(name, breed){
//         super(name)
//         this.breed = breed
//     }
//     bark(){
//         console.log(this.name + 'is barking')
//     }
// }

// const d = new Dog('Tommy', 'German shepherd')
// d.eat()  // inherited from Animal
// d.bark()  // Dog’s own method

/********** super *************/
// super() basically parent class এর তৈরি করা this object return করে।
// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walking(){
//       console.log(`${this.name} is walking......`)
//     }

//     greet() {
//     console.log("Hello from Parent");
//    }
// }

// class Lion extends Animal{
//     constructor(name, breed){
//         // super(name)
//         super()
//         super.greet() //parent এর method call
//         this.name = name
//         this.breed = breed
//     }
// }

// let newAnimal = new Lion('Lion', 'German shepherd')
// console.log(newAnimal.name)
// console.log(newAnimal.breed)
// newAnimal.walking()
// newAnimal.greet()

// super() call করার rule
// Rule 1: extends করলে constructor এর ভিতরে super() বাধ্যতামূলক
// Rule 2: super() অবশ্যই this এর আগেই কল করতে হবে
// Rule 3: super() কেবল constructor এর ভিতরেই call করা যায়
// Rule 4: super.method() child method থেকে parent method চালায়



// ********** Getter & Setter *************

// class Bank{
//     balance = 0
// }
// let b = new Bank()
// console.log(b.balance)
// b.balance = -520
// console.log(b.balance)

// class Bank{
//     _balance = 1000
//     get balance(){
//         console.log('Getter start...')
//         return this._balance
//     }

//     set balance(value){
//         if(value < 0){
//             console.log('Invalid amount')
//             return
//         }
//         this._balance = value
//     }
// }

// const b = new Bank()
// b.balance = -52200