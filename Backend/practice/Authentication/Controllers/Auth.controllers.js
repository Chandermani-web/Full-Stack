import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { UserModel } from '../Models/Auth.model.js';
import 'dotenv/config'

export const Signup = async (req, res) => {
    try{
        const { username, email , password } = req.body;
        const userexist = await UserModel.findOne({ email });
        if(userexist){
            return res.status(409).json({
                message: "User is already exist, you can login",
                success: false,
            })
        }
        const usermodel = new UserModel({username, email, password})
        usermodel.password = await bcrypt.hash(password, 10);
        await usermodel.save();
        res.status(201).json({
            message: 'Signup Successfully',
            success: true,
        })
    }catch(error){
        res.status(500).json({
          message: "Internal Server Error",
          success: true,  
        })
    }
};

export const Login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const userexist = await UserModel.findOne({ email });
        if(!userexist){
            res.status(403).json({
                message: "Auth failed invalid email or password",
                success: false,
            })
        }
        const ispasswordequal = await bcrypt.compare(password, userexist.password);
        if(!ispasswordequal){
            res.status(403).json({
                message: "Auth failed password is wrong",
                success: false,
            })
        }
        res.status(200).json({
            message: "Login Successfully",
            success: true,
        })
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error",
            success: true,
        })
    }
}