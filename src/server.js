const express = rquire("express")
const app = exrpess()
const port = 3000
const cors= require("cors")
import connectDB from "../config/db"
//Routes
import UserRoutes from "./routes/UserRoutes";

connectDB();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("server is running...")
});
app.use('/',UserRoutes)

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})