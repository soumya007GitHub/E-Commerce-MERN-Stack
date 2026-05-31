import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

mongoose.connect("mongodb://soumya007:8ifkut0vsgfrR5An@ac-tilnrls-shard-00-00.wbjd4nw.mongodb.net:27017,ac-tilnrls-shard-00-01.wbjd4nw.mongodb.net:27017,ac-tilnrls-shard-00-02.wbjd4nw.mongodb.net:27017/?ssl=true&replicaSet=atlas-y88c7s-shard-0&authSource=admin&appName=Cluster1")
.then(()=>{
    console.log("Connected to MongoDB Successfully");
})
.catch(err=>console.log(err.message));

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser());

app.listen(PORT, ()=>{
    console.log("Server started on port"+PORT);
})