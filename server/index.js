import  express from "express";
import dotenv from "dotenv";
dotenv.config();

import  Path  from "path";
const __dirname = Path.resolve();

import mongoose from "mongoose";
import Client from "./models/Client.js";


const app = express();
app.use(express.json());


const connectMongoDB = async()=>{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
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

if (process.env.NODE_ENV === "production")
{
    app.use(express.static(Path.join(__dirname, '..','client','build')));

    app.get('*', (req, res)=>{
        res.sendFile(Path.join(__dirname, '..','client','build','index.html'))
    });
}

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
});