import { createReadStream } from 'fs';

// const stream = createReadStream("./data.txt", { highWaterMark: 90000000 })

const stream = createReadStream("./data.txt", { encoding: "utf-8" })

stream.on("data",(data)=>{
    console.log(data.toString());
})

const stream2 = createReadStream("c:\\Personal working file himanshu\\Python\\01python\\04-conditional.py", { encoding: "utf-8" })

stream2.on("data", (data)=>{
    console.log(data.toString());
})