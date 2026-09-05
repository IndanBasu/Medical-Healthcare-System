import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoutes.js"

// app config

const app = express()
const port = process.env.PORT || 4000

// connect to MongoDB

connectDB()

// connect to Cloudinary

connectCloudinary()

// middleware

app.use(express.json())
app.use(cors())

// api endpoints

app.use('/api/admin', adminRouter) // -> http://localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
    res.send("API is running")
})

// listen

app.listen(port, () => console.log("Server listening on port", port))