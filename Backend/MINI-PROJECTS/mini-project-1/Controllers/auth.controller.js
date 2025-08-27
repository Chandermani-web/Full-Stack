import UserModel from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: user.email, userID: user._id }, "secret123", {
      expiresIn: "1d",
    });

    res.cookie("token", token, { httpOnly: true });
    // return res.status(201).json({
    //   message: "User registered successfully",
    //   success: true,
    //   user: { id: user._id, username: user.username, email: user.email },
    // });
    return res.redirect("profile");
  } catch (err) {
    console.error(`Error: ${err}`);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(404).json({
        message: "User does not exist, please create an account",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const token = jwt.sign({ email: userExist.email, userID: userExist._id }, "secret123", {
      expiresIn: "1d",
    });

    res.cookie("token", token, { httpOnly: true });
    return res.redirect("profile");
  } catch (err) {
    console.error(`Error: ${err}`);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const logout = (req,res) => {
  try{
    res.cookie("token","");
    res.redirect("login");
  }
  catch(err){
    console.log(`Error Occured: ${err}`);
  }
}