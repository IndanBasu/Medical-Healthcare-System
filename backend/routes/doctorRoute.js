import express from "express"
import { listDoctors, loginDoctor } from "../controllers/doctorController.js"

const doctorRouter = express.Router()

doctorRouter.get("/list", listDoctors)
doctorRouter.post("/login", loginDoctor)

export default doctorRouter
