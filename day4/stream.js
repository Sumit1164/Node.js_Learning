// Stream in nodejs
const http = require("http");
const fs = require("fs");
const {Transform, pipeline} = require("stream")  //PipeLine for the transform 

const server = http.createServer((req, res) => {
  // -------1
  // Bad way to download file
  // const file = fs.readFileSync("sample.txt");
  // res.end(file);

  // Good way to download file using Streaming(Stream)
  // const readableStream = fs.createReadStream("sample.txt")
  // readableStream.pipe(res)
  // res.end()

  // -------2 (copy & paste)
  // Bad way to download file
  // const file = fs.readFileSync("sample.txt")
  // fs.writeFileSync("sampleCopy.txt", file)
  // res.end()

  // Good way to download file using Streaming(Stream)
  // const readStream = fs.createReadStream("sample.txt");
  // const writeStream = fs.createWriteStream("sampleCopy.txt");

  // readStream.on("data", (chunks) => {
  //   console.log("Chunks: ", chunks);
  //   writeStream.write(chunks);
  // });


  // -------3 String Processing
  // -> Convert sample.txt file characters into UpperCase()
  // -> Convert ipsum into SUMIT
  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("sampleCopy.txt");

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "SUMIT");
      callback(null, modifiedWord)
    }
  })
  // Bad way
  // readStream.on("data", (chunk) => {
  //   const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "SUMIT");   // gi -> golable accepted
  //   writeStream.write(modifiedWord)
  // })
  
  // Good way 
  readStream.pipe(transformStream).pipe(writeStream)
  // pipeline(readStream, transformStream, pipeline, (err) => {
  //   console.log(err)
  // })
  res.end()
});

server.listen(8080, () => {
  console.log("Server is connected at 🔥", 8080);
});
