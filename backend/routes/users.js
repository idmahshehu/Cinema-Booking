import express from "express";
import { user } from "../controllers/user.js";

const router = express.Router()

router.post("/user", user)
// router.get("/find/:idusers", getUser )

export default router