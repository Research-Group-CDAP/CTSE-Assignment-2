import express from "express"
import {addAuthConfig,authorize,authorizeSeller,authorizeBuyer,authorizeAdmin} from "../controller/auth.controller.js"
const authRoutes = express.Router();


authRoutes.get("/authorize",  authorize);
authRoutes.get("/authorizeSeller",  authorizeSeller);
authRoutes.get("/authorizeBuyer",  authorizeBuyer);
authRoutes.get("/authorizeAdmin",  authorizeAdmin);
authRoutes.post("/registerAuth",  addAuthConfig);



export default authRoutes;

