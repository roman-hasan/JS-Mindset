// console.log('Start')
// console.log(x)
// console.log('End')


// 2nd

// try{
//     console.log(x)
// }catch(err){ 
//     console.log(err.name)
//     console.log(err.message)
// }

// try{
//     let age = -5
//     if(age < 0){
//         throw new Error('Age negative hote pare nah!')
//     }
//     console.log('Age holo', age)
// }catch(err){
//     console.log('Error paoya gese: ' ,err.message)
// }


// 3nd
// console.log('Start')
// try{
//     console.log(x)
// } catch(err){ // err হচ্ছে একটা Error object
//     console.log('Error paoya gese:', err.message) // message হচ্ছে কী ভুল হয়েছে, সেটা ছোট করে লেখা
// }

// console.log('End')

// try{
//     console.log('Try block start');
//     console.log(x)
// }catch(error){
//     console.log('Error dhora porlo: ', error.message)
// }finally{
//     console.log('Ei part shob shomoy cholbei (finally block)')
// }
// console.log('End of code')

//********* Nested Try...catch*****

try{
    try{
        throw new Error('Inner Error!')
    }catch(err){
        console.log('Inner catch:', err.message)
        throw new Error('outer Error!')
    }
}catch(err){
    console.log('Outer catch', err.message)
}