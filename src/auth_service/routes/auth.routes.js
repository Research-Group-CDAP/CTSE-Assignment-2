import express from "express"
import {addAuthConfig,authorize} from "../controller/auth.controller.js"
const authRoutes = express.Router();


authRoutes.get("/authorize",  authorize);
authRoutes.post("/registerAuth",  addAuthConfig);



export default authRoutes;

