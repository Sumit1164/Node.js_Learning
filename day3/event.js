// Events in node-js

const EventEmitter = require("events");

const emitter = new EventEmitter();

// 2 key method in events -> 1. emit(eventName, [args]) -->execute   2. on(eventName, Listner) --> Create

emitter.on("GREET", (args) => {
  console.log(
    `Hello ${args.userName}, your id is: ${args.id} and email: ${args.email}`
  );
});

emitter.emit("GREET", {
  userName: "Sumit Tripathi",
  id: 164,
  email: "sumittripathi5775@gmail.com",
});
