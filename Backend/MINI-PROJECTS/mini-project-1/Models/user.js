import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    posts: [  // plural is clearer
        { type: mongoose.Schema.Types.ObjectId, ref: "post" }
    ],
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
