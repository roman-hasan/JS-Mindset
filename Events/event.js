// const btn = document.querySelector('button')
// function sayHi(){
//     console.log('Hi Nuhail Fayez')
// }

// btn.addEventListener('click', sayHi)


// btn.addEventListener('click', function(e){
//     // console.log(e)
//     // console.log(e.target)
// })

// // const box = document.querySelector('.box')
// // box.style.margin = '10px'
// // box.style.width='100px'
// // box.style.height='100px'
// // box.style.cursor= 'pointer'
// // box.style.backgroundColor='green'
// // console.log(box)


// // const changeBtn = document.querySelector('.changeBtn')
// // changeBtn.addEventListener('dblclick', function(){
// //    box.style.backgroundColor = 'red'
// // })


// const pTag = document.querySelector('p')
// pTag.addEventListener('mousedown', function(){
//     pTag.style.color = 'red'
// } )
// pTag.addEventListener("mouseup", function(){
//     console.log('color change')
// } )

// document.addEventListener('mousemove', (e)=>{
//     // box.textContent = `${e.pageX} px, ${e.pageY} px`
// })

// // Keyboard Events

// const input = document.querySelector('input')
// input.addEventListener('keydown', (e)=>{
//     // console.log(e.key)
//     if(e.key === 'Enter'){
//         // submitForm()
//     }
// })


// const form = document.querySelector('form')
// // const email = document.querySelector('#email')
// // const password = document.querySelector('#password')

// form.addEventListener('submit', function(e){
//     // const email = e.target.email
//     // const password = e.target.password
//     // Destructuring >>>>>>>>
//     // const {email, password} = e.target
//     e.preventDefault()
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(email)
//     // console.log(password)
// })


// const form = document.querySelector('#loginForm')
// const  error = document.querySelector('#error')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const {username, email} = e.target
//     const usernameValue = username.value.trim()
//     const emailValue = email.value.trim()
//     if(!usernameValue || !emailValue) return alert('All fields are required')
//     const data = {
//         username: username.value,
//         email: email.value
//     }
//     console.log('Login Data', data)
//     e.target.reset()
// })

// **************** Event Bubbling, Capturing & Delegation ***********

const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

// Event Bubbling :- ভেতর থেকে বাইরে যাওয়া
// parent.addEventListener("click", function(){
//     console.log('parent')
// })
// Event Capturing:- বাইরে থেকে ভিতরে আসা
// parent.addEventListener("click", function(){
//     console.log('parent')
// },true)

// child.addEventListener('click', function(){
//     console.log('child')
// })

// key points:-
// 1. true দিলে → Capturing
// 2. না দিলে → Bubbling

// stopPropagation

// child.addEventListener('click', function(e){
//     e.stopPropagation()
//     console.log('child')
// })

// Event Delegation

// const li = document.querySelector('#list')

// li.addEventListener('click', (e)=>{
//     if(e.target.tagName === 'LI'){
//         console.log(e.target.innerText)
//     }
// })

// *****EVENT OBJECT*****

// e.target = যে element এ আসলে event টা ঘটেছে

// child.addEventListener('click', function(e){
//     // console.log(e)
//     // console.log(e.target)
// })

// e.currentTarget = যে element এ event listener বসানো আছে

// parent.addEventListener('click', function(e){
//     // console.log('target: ', e.target)
//     // console.log('currentTarget: ', e.currentTarget)
// })

// e.preventDefault() = Browser এর default কাজ বন্ধ করে

// e.stopPropagation() = Event আর উপরে যাবে না

// child.addEventListener('click', function(e){
//     e.stopPropagation()
//     console.log('child')
//     console.log(e.type)
// })


// ********* Custom Events & dispatchEvent *********

// Step 1: Event create
const myEvent = new Event('userLogin') // here userLogin is event name

// Step 2: Event listen
document.addEventListener('userLogin', function(){
    console.log('User logged in!')
})

// Step 3: Event fire করা (dispatch)
document.dispatchEvent(myEvent)

const custom = document.querySelector('.custom')

// practice:-
const ev = new Event('hello')
document.addEventListener('hello', ()=>{
    console.log('Hello event received')
})
document.dispatchEvent(ev)


const form = document.getElementById('loginForm')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const username = e.target.username.value.trim()

    if(!username) return
    const loginEvent = new CustomEvent('userLogin',{
        detail:{
            username: username
        }
    })
    document.dispatchEvent(loginEvent)
    e.target.reset()
})

const navbar = document.getElementById('navbar')
document.addEventListener('userLogin',function(e){
    navbar.innerText = 'Hello, '+ e.detail.username
})