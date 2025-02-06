import Product from "../models/products.js"; // Assuming you have a Product model

class ProductController {
  // Get all products
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll(); // Fetch all products from the database
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  // Get product by ID
  static async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id); // Find product by primary key (ID)
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  // Create a new product
  static async createProduct(req, res) {
    try {
      const newProduct = await Product.create(req.body); // Create a new product with the provided data
      res.status(201).json(newProduct); // Respond with the newly created product
    } catch (error) {
      res.status(500).json({ error: "Failed to create product" });
    }
  }

  // Update product by ID
  static async updateProductById(req, res) {
    try {
      const [updated] = await Product.update(req.body, {
        where: { id: req.params.id }, // Update the product by ID
      });
      if (updated) {
        const updatedProduct = await Product.findByPk(req.params.id);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update product" });
    }
  }

  // Delete product by ID
  static async deleteProductById(req, res) {
    try {
      const deleted = await Product.destroy({
        where: { id: req.params.id }, // Delete the product by ID
      });
      if (deleted) {
        res.status(204).send(); // No content for successful deletion
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
}

export default ProductController;
