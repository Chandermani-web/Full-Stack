import { time } from "console";


function givepage(req,res,next){
    const data = req.originalUrl;
    const log = `User on this page ${data} on ${new Date().toString()}`;
    console.log(`\n${log}\n`);
    next();
}

export default givepage;
