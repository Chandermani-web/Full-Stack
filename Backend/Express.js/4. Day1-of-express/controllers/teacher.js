import express from 'express'

const allteacher = (req, res) => {
  res.send("All teacher");
};

const newteacher = (req, res) => {
    res.send("Create new teacher");
};

const updateteacher = (req, res) => {
    res.send("Update teacher");
};

const deleteteacher = (req,res) => {
    res.send("Delete teacher");
};


export { allteacher, newteacher, updateteacher, deleteteacher };