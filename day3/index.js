// OBJECTIVE

//  CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// -> LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G- LOGIN, LOGOUT, PURCHASE, AND PROFILE UPDATE)
// -> TRACKS HOW MANY TIMES EACH EVENTS IS EMITTED
// -> LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARY EVENTS IS TRIGGERED

// !REQUIREMENT

// -> create at least four custom events
// -> emit these events multiple times with different arguments (e.g username, item purchased)
// -> tracks and store the count of each event type
// ->define a summary events that logs a detailed report of how many times each event was triggered

const fs = require("fs")
const EventEmitter = require("events");
const userEmitter = new EventEmitter();

let eventCounts = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileupdate: 0
}

const LogFile = "eventlog.json"
if (fs.existsSync(LogFile)) {
    const data = fs.readFileSync(LogFile, "utf-8")
    Object.assign(eventCounts, JSON.parse(data))
}
function saveCount() {
    fs.writeFileSync(LogFile, JSON.stringify(eventCounts, null, 2))
}

// create events
userEmitter.on("LOGIN", (username) => {
    eventCounts.login++
    console.log(`${username} Logged In Successfully✅`)
    saveCount()
})
userEmitter.on("LOGOUT", (username) => {
    eventCounts.logout++
    console.log(`${username} Logout successfully📤`)
    saveCount()
})
userEmitter.on("PURCHASE", (username, item) => {
    eventCounts.purchase++
    console.log(`${username} PURCHASED ${item}`)
    saveCount()
})
userEmitter.on("PROFILE_UPDATE", (username, field) => {
    eventCounts.profileupdate++
    console.log(`${username} update their profile field: ${field}`)
    saveCount()
})

userEmitter.on("SUMMARY", () => {
    console.log("\nEvent Summary: ")
    console.log(`Logins: ${eventCounts.login}`)
    console.log(`Logouts: ${eventCounts.logout}`)
    console.log(`Purchase: ${eventCounts.purchase}`)
    console.log(`Profile_Update: ${eventCounts.profileupdate}`)
})


// emit events with different arguments
userEmitter.emit("LOGIN", "SUMIT SK")
userEmitter.emit("LOGOUT", "SUMIT SK")
userEmitter.emit("PURCHASE", "SUMIT SK", "Iphone17 Pro Max")
userEmitter.emit("PROFILE_UPDATE", "SUMIT SK", "age is changed")

userEmitter.emit("SUMMARY")

// 