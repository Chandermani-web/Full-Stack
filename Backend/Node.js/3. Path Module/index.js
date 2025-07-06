import path from "path"

console.log(path.basename("c:\\nodejs\\app.html"));
console.log(path.basename("c:\\nodejs\\app.js", ".js"));

console.log(path.dirname("c:\\nodejs\\course\\app.js"))

console.log(path.extname("c:\\nodejs\\course\\app.js"))
console.log(path.extname("c:\\nodejs\\course\\app.html"))

console.log(path.join("c:" , "nodejs", "courses", "modules"))
console.log(path.join("c:" , "nodejs", "courses", "modules", ".."))
console.log(path.join("c:" , "nodejs", "courses", "modules", "..",".."))

console.log(path.normalize("c:\\\\courses\\\\\\redux\\\store\\featurs"));


console.log(path.parse("c:\\nodejs\\02. path module\\module\\index.js"))