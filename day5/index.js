const crypto = require("crypto")

// 1. randomBytes
const randomValue = crypto.randomBytes(8)
console.log(randomValue.toString("hex"))

// 2. createHash
const hashValue = crypto.createHash("sha256").update("Sumit").digest("hex")
const inputValue = "Sumit"
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")
if (hashValue === matchValue) {
    console.log("You are logged in")
} else {
    console.log("Bak*hodi mat kar be la*de")
}


// encryption and decryption