const eventEmitter = require ('events')

var EventEmitter = new eventEmitter()

EventEmitter.on('myEvent',(msg) => {
    console.log(msg);
})
var newEvent = function () {
    console.log("this is second msg")
}
var EventNew = function() {
    console.log("new one guys......!")
}
EventEmitter.on("new one guys............",EventNew)
EventEmitter.on('secondevent', newEvent);
EventEmitter.emit("myEvent","first message");
EventEmitter.emit("secondevent");
console.log("new one guys............");