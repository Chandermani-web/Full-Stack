import * as fs from 'fs/promises'


// For Creating a folder anywhere in the pc memory(this pc)
try{
    await fs.mkdir("c:\\Personal working file himanshu\\Web\\Backend\\Node.js\\5. OS Module" , { recursive: true });
    await fs.mkdir("c:\\Personal working file himanshu\\Web\\Backend\\Node.js\\6. URL Module" , { recursive: true });
    await fs.mkdir("c:\\Personal working file himanshu\\Web\\Backend\\Node.js\\7. HTTP Module" , { recursive: true });
    await fs.mkdir("c:\\Personal working file himanshu\\Web\\Backend\\Node.js\\8. Routing" , { recursive: true });
    await fs.mkdir("c:\\Personal working file himanshu\\Web\\Backend\\Node.js\\9. Serving" , { recursive: true });
    console.log("Folder Created...")
}
catch(error){
    console.log(error)
}


// For read the file name from the memory
try{
    const files = await fs.readdir("C:\\Personal working file himanshu\\Python\\01python");
    for(const file of files){
        console.log(file)
    }
}catch(error){
    console.log(error)
}

try{
    const file = await fs.readdir("./");
    console.log(file);
    const read = await fs.readFile("C:\\Personal working file himanshu\\Python\\01python\\04-conditional.py", "utf-8")
    console.log(read);
}catch(error){
    console.log(error)
}