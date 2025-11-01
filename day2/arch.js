// const fs = require("fs")


// setImmediate(() => { console.log("I'm from the SetImmediate")}, 0)

// console.log("I'm from the ConsoleLog")

// setTimeout(() => { console.log("I'm from the SetTimeout") }, 0)


/*
   This type of output bcz follow node js arachticture 

   Output -> 1. I'm from the ConsoleLog
             2. I'm from the SetTimeout
             3. I'm from the SetImmediate


    When comment out the console.log then output does not follow node js exeacution arachtiure 
    execution depend upon your CPU

    Output -> 1. I'm from the SetImmediate
              2. I'm from the SetTimeout

*/


//? Thread pool size
// const os= require("os")
// console.log(os.cpus().length)   // -> 16 Worker



// Thread Pool in node js

// process.env.UV_THREADPOOL_SIZE = 5 //Increase Thread poo; size 

let start = Date.now();

const crypto = require("crypto")

crypto.pbkdf2("password-1", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done✅`)
})

crypto.pbkdf2("password-1", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done✅`);
});

// crypto.pbkdf2("password-1", "salt", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done✅`);
// });

// crypto.pbkdf2("password-1", "salt", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done✅`);
// });

// crypto.pbkdf2("password-1", "salt", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done✅`);
// });