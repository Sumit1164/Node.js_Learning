const { error } = require("console")
const fs = require("fs")

// const os = require("os")
// console.log(os.cpus().length)  // 16 workers -> thread

// sync -> Blocking Code, async -> Non-Blocking Code


// write

// fs.writeFileSync("./test.txt", "I'm overwrite in test.txt file")

// fs.writeFile("./text.txt", "I'm going to become a backend developer", (err) => {
//     console.log(err)
// })


// read

// const wat = fs.readFileSync("./text.txt", "utf-8")
// console.log(wat)


// fs.readFile("./text.txt", "utf-8", (error, response) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// })



// update

// fs.appendFileSync("./test.txt", new Date().toDateString())

// fs.appendFile("./text.txt", `This is sumit and logged at  ${new Date().toDateString()}\n`, (err, res) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })


// delete

// try {
//     fs.unlinkSync("example.txt");
//     console.log("File deleted succesfully!")
// } catch (error) {
//     console.log("error deleting file ", error)
// }


// fs.unlink("examples.txt", (err) => {
//     if (err) {
//         console.log("Error deleting file", err)
//     } else {
//         console.log("File deleted succesfully! ")
//     }
// })










// *Read
// 1- way
// const res = fs.readFileSync("./text.txt", "utf-8")
// console.log(res)
// 2- way
// fs.readFile("./test.txt", "utf-8", (error, response) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// })


// *Write
// 1- way
//? fs.writeFileSync("./text.txt", "Heyyy this is my first day of learning Node.js")
// fs.writeFileSync("./test.txt","Heyyy");
// 2- way
//? fs.writeFile("./text.txt", "Heyy I'm async code", (err) => {
//     console.log(err)
// })


// *Update or append
// 1- way
// fs.appendFileSync("./text.txt", new Date().toDateString())
// 2- way
// fs.appendFile("./log.txt", `Heyy use this type date ${new Date().toDateString()}`, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)    
//     }
// })


// *Delete