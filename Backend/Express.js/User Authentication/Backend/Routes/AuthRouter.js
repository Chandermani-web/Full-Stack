import express from "express";
import { loginvalidation, signupvalidation } from "../Middlewares/AuthValidation.js";
import { Login, Signup } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/login", loginvalidation,Login);
router.post("/signup",signupvalidation, Signup);

export { router };