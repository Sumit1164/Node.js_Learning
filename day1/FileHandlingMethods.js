const fs = require("fs");

// fs.cpSync(source, destination, options)
// Copies files or directories synchronously.

// Copy a single file
// fs.cpSync("source.txt", "destination.txt");

// Copy a directory (recursive)
// fs.cpSync("source_folder", "destination_folder", { recursive: true });

// console.log("Copy completed!");

// fs.statSync(path)
// Returns file/directory information (metadata) synchronously.

try {
  const stats = fs.statSync("example.txt");
  console.log("File size:", stats.size, "bytes");
  console.log("Is file?", stats.isFile());
    console.log("Is directory?", stats.isDirectory());
    console.log("is creation date?", stats.birthtime.toString());
    console.log("Is last modified?", stats.mtime.toDateString());
} catch (err) {
  console.error("Error:", err);
}


// fs.mkdirSync(path, options)
// Creates a new directory synchronously.


try {
  fs.mkdirSync("newFolder");
  console.log("Folder created!");
} catch (err) {
  if (err.code === "EEXIST") {
    console.log("Folder already exists.");
  } else {
    console.error("Error creating folder:", err);
  }
}
