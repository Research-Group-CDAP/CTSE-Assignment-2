import express from "express"
import {addAuthConfig} from "../controller/auth.controller.js"
const authRoutes = express.Router();


authRoutes.post("/registerAuth",  addAuthConfig);


export default authRoutes;
