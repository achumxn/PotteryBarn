import express, { Router } from "express";
import { loginUser } from "../controllers/authController.js";

const router =  express.Router();

router.post('/userLogin',loginUser);

export default router;