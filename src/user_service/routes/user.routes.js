import express from "express"
import {login,register,updateUser,deleteUser,getUserDetailsbiID,getUserList} from "../controller/user.controller.js"
const userRoutes = express.Router();


userRoutes.get("/login",  login);
userRoutes.post("/register",  register);
userRoutes.put("/update/:id",  updateUser);
userRoutes.delete("/delete",  deleteUser);
userRoutes.get("/:id",  getUserDetailsbiID);
userRoutes.get("/",  getUserList);

export default userRoutes;
