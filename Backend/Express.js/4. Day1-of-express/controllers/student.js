import express from 'express'

const allstudent = (req, res) => {
  res.send("All student");
};

const newstudent = (req, res) => {
    res.send("Create new student");
};

const updatestudent = (req, res) => {
    res.send("Update student");
};

const deletestudent = (req,res) => {
    res.send("Delete Student");
};


export { allstudent, newstudent, updatestudent, deletestudent };