import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",   // match User model name
    },
    date: {
        type: Date,
        default: Date.now,
    },
    content: String,
    likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "user" }
    ]
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;
    