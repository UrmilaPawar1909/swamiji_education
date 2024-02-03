import  express from "express";

import mongoose from "mongoose";
import Client from "./models/Client.js";

const app = express();
app.use(express.json());

const MONGODB_URI = 'mongodb+srv://urmila1909:urmila1909@urmila121.ibfdcnk.mongodb.net/swamiji';
const connectMongoDB = async()=>{
    const connection = await mongoose.connect(MONGODB_URI);
    if (connection){
        console.log("connected to MongoDB");
    }

}

connectMongoDB();

app.post('/submit', async(req, res)=>{

    const {name, email, mobileno}= req.body;
    const user = new Client({
        name:name,
        email:email,
        mobileno:mobileno,
        
    });

    try{
        const saveduser = await user.save();

        return res.json({
            success:true,
            data:saveduser,
            message:"From submited successfully"
        });
    }

    catch(e){
        return res.json({
        success:false,
        message: e.message
    })
    
    }
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
});