import express from "express";
import ProductController from "../../controllers/ProductController.js";

const router = express.Router();

// Example test endpoint /api/products
router.get("/", async (req, res) => {
  // console.log("Hello product endpoint!");
  // console.log("req.url", req.url);
  // res.status(200).json({ message: "Hello product endpoint" });
  ProductController.getAllProducts(req, res);
});

// All routes

router.get("/getProducts", (req, res) => {
  ProductController.getAllProducts(req, res);
});

// Example get Product by ID endpoint /api/products/getProductById/:id
router.get("/getProduct/:id", (req, res) => {
  ProductController.getProductById(req, res);
});

// Example create Product endpoint /api/products/createProduct
router.post("/createProduct", (req, res) => {
  ProductController.createProduct(req, res);
});

// Example update Product by ID endpoint /api/products/updateProduct/:id
router.put("/updateProduct/:id", (req, res) => {
  ProductController.updateProductById(req, res);
});

// Example delete Product by ID endpoint /api/products/deleteProduct/:id
router.delete("/deleteProduct/:id", (req, res) => {
  ProductController.deleteProductById(req, res);
});

export { router as productRouter };
