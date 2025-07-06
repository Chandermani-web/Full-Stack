function students(req,res,next){
    const id = req.params.id;
  const { name } = req.params;
  const { course, branch } = req.params;
    console.log(`Delete successfully:\nStudent Id: ${id}\nStudent Name: ${name}\nCourse: ${course}\nBranch: ${branch}`)
    next();
};

export default students;