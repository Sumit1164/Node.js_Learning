// Path module

const path = require("path");

console.log("FileName📂", __filename);
console.log("DirectoryName📁", __dirname); // common js me store __filename

// School management system
// Folder/student/data.txt

// *1. join()
const filepath = path.join("folder", "students", "data.txt");
console.log(filepath);

const parsedDataPath = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({
  parsedDataPath,
  resolvedPath,
  extname,
  basename,
  dirname,
});
