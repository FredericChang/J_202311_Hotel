import express  from "express"; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import hotelsApiRoute from "./ApiRoutes/hotels.js"
import roomsApiRoute from "./ApiRoutes/rooms.js"
import usersApiRoute from "./ApiRoutes/users.js"
import authApiRoute from "./ApiRoutes/auth.js"


const app = express()

dotenv.config()

const connect = async() => {
    try{
     await mongoose.connect(process.env.MONGODB)
        console.log("Connected to mongoDB")
    }catch(error){
        console.log("disconnected to mongoDB")
    }
}
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!")
})
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!")
})

const port =5000;
app.listen(port,()=>{
     connect();
    console.log(`connected to ${port} backend`)
    //並要像npm start 一樣啟動它，
})

app.use(express.json())
app.use("/api/v1/hotels",hotelsApiRoute)
app.use("/api/v1/rooms",roomsApiRoute)
app.use("/api/v1/users",usersApiRoute)
app.use("/api/v1/auth",authApiRoute)

app.use((error, req, res,next ) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "伺服器錯誤";

})