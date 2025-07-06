import Joi from "joi";

const AddTaskMiddlewares = (req,res,next) => {
    const Schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        level: Joi.string().required(),
        category: Joi.string().required(),
        duedate: Joi.string().required(),
        duetime: Joi.string().required(),
        additional_notes: Joi.string().required(),
    })

    const { error } = Schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: "Bad Request",
            error
        })
    }
    next();
};

export { AddTaskMiddlewares };