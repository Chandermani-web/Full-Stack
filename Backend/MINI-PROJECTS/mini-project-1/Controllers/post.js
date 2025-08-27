import PostModel from "../Models/post.js";
import UserModel from "../Models/user.js";

export const Post = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.user.email });
    const { content } = req.body;

    // create post
    const post = await PostModel.create({
      user: user._id,
      content,
    });

    // push post into user
    user.posts.push(post._id);
    await user.save();

    res.redirect("/profile");
  } catch (err) {
    console.error(`Error Occurred: ${err}`);
    res.status(500).send("Internal Server Error");
  }
};

export const Like = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id).populate("user");
    if (!post) {
      return res.status(404).send("Post not found");
    }

    const userId = req.user.userID; // same as JWT payload
    if (post.likes.indexOf(userId) === -1) {
      post.likes.push(userId);
    }
    else{
      post.likes.splice(post.likes.indexOf(userId),1);
    } 
    
    await post.save();
    res.redirect("/profile");
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
