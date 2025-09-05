import cookieParser from "cookie-parser";
import JsonWebToken from "jsonwebtoken";
import 'dotenv/config';

const isLoggedIN = async (req,res,next) => {
    const token = req.cookies?.miniproject2token;

    if(!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });
    console.log(token);
    try{
        const data = JsonWebToken.verify(token, process.env.JWT_SECRET_KEY);
        req.user = data;
        next();
    }
    catch(error){
        return res.status(401).json({ message: "Invalid or expired token" });
    }   
}

export default isLoggedIN;