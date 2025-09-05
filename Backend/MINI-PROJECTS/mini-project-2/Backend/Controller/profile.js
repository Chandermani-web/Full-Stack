import authModel from "../Models/auth.model.js";

const profile = async (req, res) => {
  try {
    console.log("🟢 req.user:", req.user);

    if (!req.user?.email) {
      return res.status(400).json({ message: "Invalid user payload in token" });
    }

    const data = await authModel
      .findOne({ email: req.user.email })
      .populate("post");

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ data, message: "About the user data" });
  } catch (error) {
    console.log(`❌ Error Occurred in profile: ${error}`);
    res.status(500).json({ message: "Server error", error });
  }
};

export default profile;
