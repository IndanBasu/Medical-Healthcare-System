import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"

// app config

const app = express()
const port = process.env.PORT || 4000

// connect to MongoDB

connectDB()

// connect to Cloudinary

connectCloudinary()

// middleware

app.use(express.json())

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
        ...(process.env.FRONTEND_URL || "")
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean)
      ]
      const isVercelPreview =
        /^https:\/\/medical-healthcare-system-[a-z0-9-]+\.vercel\.app$/i.test(
          origin || ""
        )

      if (!origin || allowedOrigins.includes(origin) || isVercelPreview) {
        callback(null, true)
      } else {
        callback(new Error("Origin not allowed"))
      }
    },
    credentials: true
  })
)

// api endpoints

app.use("/api/admin", adminRouter)    // -> http://localhost:4000/api/admin/add-doctor
app.use("/api/doctors", doctorRouter)
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/users/test", (req, res) => {
  res.json({ success: true, message: "User route is working" })
})

// listen

if (!process.env.VERCEL) {
  app.listen(port, () => console.log(`Server Started ${port}`))
}

export default app