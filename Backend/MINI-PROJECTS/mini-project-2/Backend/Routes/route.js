import express from 'express';
import { login, logout, signup } from '../Controller/auth.controller.js';
import isLoggedIN from '../Middlewares/middleware.js';
import profile from '../Controller/profile.js';
const router = express.Router();

// Authentication
router.post("/signup",signup);
router.post("/login",login);
router.delete("/logout",logout);

// profile 
router.get("/profile",isLoggedIN,profile);

export default router;