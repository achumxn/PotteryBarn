import express from "express";
import multer from "multer";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

// MULTER CONFIG
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer(
    { 
        storage : storage 
    }
);

// ROUTES
router.post("/add", upload.single("image"), addProduct);
router.get("/getProducts", getProducts);
router.put("/update/:id", upload.single("image"), updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
