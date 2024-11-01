import { Router } from "express";
import {
    getAllProducts, 
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController";

const router = Router();

router.get("products/", getAllProducts); // Trae todos los productos
router.get("products/:id", getProductByID); // Trae un solo producto
router.get("products/", createProduct); // Crear un producto
router.put("products/:id", updateProduct); // Actualizar un producto
router.delete("products/:id", deleteProduct); // Borrar producto

export default router;