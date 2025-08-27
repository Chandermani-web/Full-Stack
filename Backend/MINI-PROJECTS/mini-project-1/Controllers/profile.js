import UserModel from "../Models/user.js";

const profile = async (req,res) => {
    let user = await UserModel.findOne({email: req.user.email}).populate("posts");
    res.render("profile", {user});
}

export default profile;