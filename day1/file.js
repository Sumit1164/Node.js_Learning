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
