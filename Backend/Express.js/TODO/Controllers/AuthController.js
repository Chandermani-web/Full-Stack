import { AddTaskModel } from "../models/Addtask.db.js";
import dotenv from "dotenv";
dotenv.config();

const AddTask = async (req, res) => {
  try {
    const { title, description, level, category, duedate, duetime, additional_notes } = req.body;

    // Create new task
    const newTask = new AddTaskModel({
      title: title?.trim(),
      description: description?.trim(),
      level,
      category,
      duedate,
      duetime,
      additional_notes: additional_notes?.trim(),
    });

    await newTask.save();
    console.log("Task saved to MongoDB:", newTask);

    res.status(201).json({
      message: "Task successfully added",
      success: true,
      task: newTask,
    });
    
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message
    });
  }
};

const GetAllTasks = async (req, res) => {
  try {
    const tasks = await AddTaskModel.find().sort({ createdAt: -1 });
    console.log("Retrieved tasks from MongoDB:", tasks.length);
    
    res.status(200).json({
      message: "Tasks retrieved successfully",
      success: true,
      tasks,
      count: tasks.length
    });
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message
    });
  }
};

const GetTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const task = await AddTaskModel.findById(id);
    
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
      });
    }

    console.log("Retrieved task from MongoDB:", task.title);
    
    res.status(200).json({
      message: "Task retrieved successfully",
      success: true,
      task
    });
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message
    });
  }
};

const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTask = await AddTaskModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
      });
    }

    console.log("Task updated in MongoDB:", updatedTask);

    res.status(200).json({
      message: "Task updated successfully",
      success: true,
      task: updatedTask,
    });
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message
    });
  }
};

const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await AddTaskModel.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
      });
    }

    console.log("Task deleted from MongoDB:", deletedTask);

    res.status(200).json({
      message: "Task deleted successfully",
      success: true,
      deletedTask
    });
  } catch (error) {
    console.error(`Error Occurred: ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message
    });
  }
};

export { AddTask, GetAllTasks, GetTaskById, UpdateTask, DeleteTask };
