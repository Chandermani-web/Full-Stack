import PostModel from "../Models/post.js";
import UserModel from "../Models/user.js";

export const Edit = async (req,res) => {
    try{
        let post = await PostModel.findOne({_id: req.params.id}).populate("user");

        res.render("edit",{post})
    }
    catch(error){
        console.log(`Error Occured: ${error}`);
    }
}

export const Update = async (req,res) => {
    try{
        let post = await PostModel.findOneAndUpdate({_id: req.params.id}, {content:req.body.content}).populate("user");
        res.redirect("/profile");
    }
    catch(error){
        console.log(`Error occured: ${error}`);
    }
}