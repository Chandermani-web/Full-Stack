import express from 'express';
import { Signup, Login } from '../Controllers/Auth.controllers.js';
import { SignUpValidation, LoginValidation } from '../Middlewares/Auth.middleware.js';

const router = express.Router();

router.post("/signup",SignUpValidation,Signup);
router.post("/login",LoginValidation,Login);

export default router;