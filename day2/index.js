const http = require("http")
const fs = require("fs");
const { error } = require("console");

const PORT = 7050

const server = http.createServer((request, response) => {

    // response.end("Helloo from server")

    // This is an assignment -> when use send request to server then create a log file 
    const log = `${Date.now()} : & From ${request.url} New Request Recieved\n`;

    fs.appendFile("logs.txt", log, (err) => {
        if (err) {
            console.error("Error writing to the log file: ", err)
            response.statusCode = 500; // server error 
            response.end("Internal server Error")
            return;
        }
        response.end("Hello world from server")
    })
})

server.listen(PORT, () => {
    console.log(`Server is running🚀 at ${PORT}`)
})