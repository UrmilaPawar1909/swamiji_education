import  express from "express";

const app = express();

app.get('/ping',(req, res)=>{

    res.json('pong')
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
});