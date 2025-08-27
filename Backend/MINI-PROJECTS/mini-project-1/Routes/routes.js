import express from 'express';
import { login, logout, signup } from '../Controllers/auth.controller.js';
import { isLoggedIN } from '../Middlewares/middlewares.js';
import profile from '../Controllers/profile.js';
import { Post, Like } from '../Controllers/post.js';
import { Edit, Update } from '../Controllers/edit.js';

const router = express.Router();

// Profile
router.get("/profile",isLoggedIN,profile)

// Signup
router.get("/signup", (req, res) => {
    res.render("signup");
})
router.post("/signup", signup);

// Login (GET -> render page, POST -> handle form)
router.get("/login", (req, res) => {
    res.render("login");  // make sure login.ejs exists in /views
});
router.post("/login", login);

// Logout
router.get("/logout", logout);

// Post
router.post("/post",isLoggedIN,Post);

// Like
router.get("/like/:id",isLoggedIN,Like);


// Edit the post 
// Edit page
router.get("/edit/:id",isLoggedIN,Edit);
// update 

router.post("/update/:id",isLoggedIN,Update);

export default router;
