// Create custom stream (Readable / Writable / Transform)

const { Readable, Writable } = require("stream")
const readableStream = new Readable({
    highWaterMark: 4,
    read(){}
})
const writableStream = new Writable({
    write(streamData) {
        console.log("WRITING...", streamData)
    }
})

readableStream.on("data", (chunk) => {
    console.log("CHUNK ", chunk, "REAL VALUE: ", chunk.toString());
    writableStream.write(chunk)
})

console.log (readableStream.push("Hello"))