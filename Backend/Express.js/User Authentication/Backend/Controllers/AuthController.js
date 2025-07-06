import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserModel } from "../Models/User.js";
import dotenv from 'dotenv';

dotenv.config();

const Signup = async (req,res) => {
    try{
        const { user, email, password } = req.body;
        const userexist = await UserModel.findOne({ email });
        if(userexist){
            return res.status(409).json({
                message: "User is already exist, you can login ", success: false
            });
        }
        const usermodel = new UserModel({ user, email, password });
        usermodel.password = await bcrypt.hash(password, 10);
        await usermodel.save();
        res.status(201).json({
            message: "Signup Successfully",
            success: true
        })
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error",
            success: true
        })
    }
};

const Login = async (req,res) => {
    try{
        const { email, password } = req.body;
        const userexist = await UserModel.findOne({ email });
        if(!userexist){
            return res.status(403).json({
                message: " Auth failed email or password is wrong ", success: false
            });
        }
        const ispwdequal = await bcrypt.compare(password, userexist.password);
        if(!ispwdequal){
            return res.status(403).json({
                message: " Auth failed email or password is wrong ", success: false
            });
        }
        const jwtTOKEN = jwt.sign(
            {email: userexist.email, _id: userexist.id},
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        );

        res.status(200).json({
            message: "Login Successfully",
            success: true,
            jwtTOKEN,
            email,
            name: userexist.name,
        })
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error",
            success: true
        })
    }
};


export { Signup,Login };