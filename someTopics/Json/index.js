const data = fetch('https://jsonplaceholder.typicode.com/users')
// data.then(res=>{
//     return res.json() // request
// }).then(read=>{
//     console.log(read)
// }).catch(err=>{
//     console.log(err.message)
// })

async function Data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const names = await response.json()
    console.log(names)
}

Data()
