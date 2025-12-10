import express from "express";
import { addUser, delUser, getUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/getUsers',getUsers);
router.put('/updateUser/:id',updateUser);
router.delete('/delUser/:id',delUser);
router.post('/addUser',addUser)

export default router;