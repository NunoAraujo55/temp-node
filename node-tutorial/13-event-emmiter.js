const EventEmitter = require("events")

//object
const customEmitter = new EventEmitter()

//we first listen to the event (on) and then emit it (emit)
// in this case response is the event
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved: ${name}, ${id}`)
})

customEmitter.on('response', ()=>{
    console.log("some other logic here")
})

customEmitter.emit('response', "john", 34)