import authModel from "../Models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../../mini-project-1/Models/user.js";

export const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // check required fields
    if (!name || !username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const userexist = await authModel.findOne({ email: email });

    if (userexist) {
      return res
        .status(501)
        .json({ message: "User already Exist, Please login", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newuser = await authModel.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: newuser.email, userID: newuser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );
    res.cookie("miniproject2token", token, {
      httpOnly: true, // ✅ fixed spelling
      sameSite: "none",
      secure: true

    });
    res
      .status(201)
      .json({ message: "✅ User Registered Successfully", success: true });

    res
      .status(201)
      .json({ message: "✅ User Registered Successfully", success: true });
  } catch (error) {
    console.log(`Error Occured: ${error}`);
    res.status(501).json({ message: "Server Error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userexist = await authModel.findOne({ email });

    if (!userexist)
      return res
        .status(400)
        .json({ message: "You haven't any account, Please create an account" });

    let checkpassword = await bcrypt.compare(password, userexist.password);
    if (!checkpassword) {
      res.status(401).json({
        message: "Invalid Credentials or Password is worng, try again.",
      });
    }
    const token = jwt.sign(
      { email: userexist.email, userID: userexist._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    res.cookie("miniproject2token", token, {
      httpOnly: true, // ✅ fixed spelling
      sameSite: "none",
      secure: true

    });

    res.status(200).json({ message: "✅ Login Successfullly", success: true });
  } catch (error) {
    console.log(`Error Occured: ${error}`);
    res.status(501).json({ message: "Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("miniproject2token", {
      httpOnly: true,
      sameSite: "none",
      secure: true

    });
    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(`Error Occured: ${error}`);
    res.status(500).json({ message: "Server Error", success: false });
  }
};
