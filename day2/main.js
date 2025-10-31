/*
console.log("hello") // global object
console.log(global)
console.log(Object.getOwnPropertyNames(global)) // process is not in JS
*/

// module, require math ye sab fs ye sab kaha se aaya "Module wrapper" 
/*
(function(export, require, module, _filename, _dirname){
// Module code actually lives in here  
})
*/
setTimeout(() => {
    console.log("I'm a devil😈 of my world🌍")
}, 2000)

let count = 0;
const interval = setInterval(() => {
    console.log(`interval count: ${++count}`)
    if (count === 4) {
        clearInterval(interval)
    }
}, 1000)