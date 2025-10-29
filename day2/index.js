const http = require("http")

const PORT = 7050

const server = http.createServer((request, response) => {
    response.end("Helloo from server")
})

server.listen(PORT, () => {
    console.log(`Server is running🚀 at ${PORT}`)
})