import mongoose from "mongoose";

const AddTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    duedate: {
        type: String,
        required: false,
    },
    duetime: {
        type: String,
        required: false,
    },
    additional_notes: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const AddTaskModel = mongoose.model("Tasks", AddTaskSchema);

export { AddTaskModel };