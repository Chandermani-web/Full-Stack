import mongoose from "mongoose";

// Define Schema
const UniversitySchema = new mongoose.Schema({
    fullname: { type: String, require: true, trim: true },
    age: { type: Number, require: true, min:18, max:50 },
    Phone_No: { type : Number, require: true, validate: (v) => v >= 10},
    Address : {type: String, require: true, trim: true},
    Company_Name: {type:String, require:  true, trim: true},
    Duration_inmonths: {type:Number, require:  true, trim: true},
    role: {type:String, require:  true, trim: true},   
    mode: {type:String, require:  true, trim: true},   
})

// Define Mode;
const UniversityModel = mongoose.model("Intern", UniversitySchema);



// Inserting Data in Database
// Insert solo data
const createDOC = async () => {
    try{
        const Intern1 = new UniversityModel({
            fullname: "Chandermani",
            age: 20,
            Phone_No: 8607653657,
            Address: "Sampla",
            Company_Name: "Unified Mentor",
            Duration_inmonths: 3,
            role: "Full-Stack Developer",
            mode: "remote"
        })
        const result = await Intern1.save();
        console.log(result);
    }catch(error){
        console.log(`Error Occured: ${error}`);
    }
};

// Insert many data
const insertManydata = async () => {
    try{
        const intern1 = new UniversityModel({
            fullname: "Chandermani",
            age: 20,
            Phone_No: 8607653657,
            Address: "Sampla",
            Company_Name: "Unified Mentor",
            Duration_inmonths: 3,
            role: "Full-Stack Developer",
            mode: "remote"
        });
        const intern2 = new UniversityModel({
            fullname: "Ankit kandwal",
            age: 26,
            Phone_No: 8607653657,
            Address: "Bahadurgarh",
            Company_Name: "Unified Mentor",
            Duration_inmonths: 3,
            role: "Full-Stack Developer",
            mode: "remote"
        });
        const intern3 = new UniversityModel({
            fullname: "Amit Kumar",
            age: 24,
            Phone_No: 8881000241,
            Address: "Dwarka",
            Company_Name: "Infern",
            Duration_inmonths: 6,
            role: "Data Analyist",
            mode: "remote"
        });
        const intern4 = new UniversityModel({
            fullname: "Mahesh",
            age: 20,
            Phone_No: 8575096314,
            Address: "Jhajjar",
            Company_Name: "Deliotte",
            Duration_inmonths: 6,
            role: "Android Developer",
            mode: "on-site"
        });
        const intern5 = new UniversityModel({
            fullname: "Sarthak",
            age: 19,
            Phone_No: 8607653657,
            Address: "jharkhand",
            Company_Name: "Soft",
            Duration_inmonths: 3,
            role: "Game Developer",
            mode: "remote"
        });

        const result = await UniversityModel.insertMany([intern1,intern2,intern3,intern4,intern5]);
        console.log(result);
    }catch(error){
        console.log(`Error occured: ${error}`);
    }
};


// Retrieve data from database

const alldoc = async ()=> {
    try{
        const result = await UniversityModel.find();
        // console.log(result);       // It give us complete data of database

        // it give us our demand data
        result.forEach((intern)=>{
            console.log(`\nName of the candidate : ${intern.fullname}\nCompany_name : ${intern.Company_Name}\nInternship duration : ${intern.Duration_inmonths}`);
        })
    }catch(error){
        console.log(`Error occured: ${error}`);
    }
}


// Update data in database

const updatedata = async (id) => {
    try{
        // UpdateOne method
        // const result = await UniversityModel.updateOne(
        //     { _id: id},
        //     {age: 45}
        // );
        // console.log(result);

        // UpdateMany method
        const result2 = await UniversityModel.updateMany({mode: "remote"}, {age: 20});
        console.log(result2);
    }catch(error){
        console.log(`Error occured: ${error}`);
    }
}

// Delete the data from the database
const deletedata = async () => {
    try{
        const result = await UniversityModel.findByIdAndDelete("68590b27e51f38d3e49191c7");
        console.log(result);
    }catch(error){
        console.log(`Error Occured : ${error}`);
    }
}



export { createDOC , insertManydata , alldoc , updatedata , deletedata}; 