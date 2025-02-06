import express from "express";
import UserController from "../../controllers/UserController.js";

const router = express.Router();

// Example test endpoint /api/users
router.get("/", async (req, res) => {
  console.log("Hello user endpoint!");
  console.log("req.url", req.url);
  res.status(200).json({ message: "Hello user endpoint" });
});

// All routes

router.get("/getUsers", (req, res) => {
  UserController.getAllUsers(req, res);
});

// Example get User by ID endpoint /api/users/getUserById/:id
router.get("/getUser/:id", (req, res) => {
  UserController.getUserById(req, res);
});

// Example update User by ID endpoint /api/users/updateUser/:id
router.put("/updateUser/:id", (req, res) => {
  UserController.updateUserById(req, res);
});

// Example delete User by ID endpoint /api/users/deleteUser/:id
router.delete("/deleteUser/:id", (req, res) => {
  UserController.deleteUserById(req, res);
});

export { router as userRouter };
