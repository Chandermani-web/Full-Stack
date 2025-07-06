import EventEmitter from 'events'

// Creating Instance

const customemitter = new EventEmitter();

customemitter.on("response", (name,id)=>{
    console.log(`user: ${name} \nid: ${id}\n`)
})

customemitter.emit("response","Ankit",22);
customemitter.emit("response","Chandermani",20);