import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { User } from "../models/user"; // Assuming you have a User model for database interactions

dotenv.config();

const router = express.Router();

// Test endpoint to check if the route is working
router.get("/", (req, res) => {
  console.log("Hello auth endpoint!");
  console.log("req.url", req.url);
  res.json({ message: "Hello auth endpoint" });
});

// Login endpoint for generating JWT token
router.post("/login", async (req, res) => {
  console.log("Login endpoint");
  console.log("req.url", req.url);
  console.log("req.body", req.body);

  // Retrieve user credentials from the request body
  const { username, password } = req.body;

  // Find user by username
  try {
    const user = await User.findOne({ where: { username } });

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || "";

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username, id: user.id },
      secretKey,
      {
        expiresIn: "1h", // Set token expiration time (1 hour)
      }
    );

    // Respond with the token
    res.json({
      description: "Login Endpoint",
      token: token,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});

export { router as authRouter };
