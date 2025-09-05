import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
    username:String,
    name: String,
    email:String,
    password:String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ]
});
const authModel = mongoose.model("user",authSchema);
export default authModel;