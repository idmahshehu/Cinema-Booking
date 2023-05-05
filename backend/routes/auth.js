import express from "express";
import {login, register,logout } from "../controllers/auth.js";
import { verifyUser } from "../controllers/auth.js";
const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout);
router.get('/',verifyUser, (req,res) => {
    return res.json({Status: "Success", username: req.username})
  })
  

export default router