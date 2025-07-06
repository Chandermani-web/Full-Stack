import greet from "./main.js";

let i = 0;
console.log("\nChandermani Friends Name Loading...\n")
let name = ["Sarthak","Ankit","Amit","Mahesh","Partham","Keshav"];
let start = setInterval(()=>{
    greet(name[i]);
    i++;
    if(i == name.length){
        i = 0;
        clearInterval(start)
        console.log("✅ Done")
    }
},500)