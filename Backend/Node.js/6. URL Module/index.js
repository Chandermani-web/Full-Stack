import { URL } from 'url'

const myURL = new URL("https://www.example.com:5000/p/a/t/h?query=string#hash")

console.log(myURL.pathname)
console.log(myURL.protocol)
console.log(myURL.hostname)
console.log(myURL.host) 
console.log(myURL.href)


console.log(myURL.toJSON());
console.log(myURL.toString());