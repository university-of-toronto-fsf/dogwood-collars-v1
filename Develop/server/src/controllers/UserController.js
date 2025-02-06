const { user } = require("../models/users");
const sequelize = require("../config/connection");

class UserController {
  debugInfo(req) {
    console.log("req.url", req.url);
    console.log("req.body", req.body);
  }

  // Get all users
  async getAllUsers(req, res) {
    console.log("getAllUsers endpoint");
    this.debugInfo(req);

    try {
      const users = await user.findAll(); // Fetch all users from the database
      res.status(200).json(users); // Respond with the users
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  // Get user by ID
  async getUserById(req, res) {
    console.log("getUserById endpoint");
    this.debugInfo(req);

    try {
      const userData = await user.findByPk(req.params.id); // Find user by primary key (ID)
      if (userData) {
        res.status(200).json(userData); // Respond with the user data
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  // Update user by ID
  async updateUserById(req, res) {
    console.log("updateUserById endpoint");
    this.debugInfo(req);

    try {
      const [updated] = await user.update(req.body, {
        // Update the user based on the request body
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await user.findByPk(req.params.id); // Fetch the updated user
        res.status(200).json(updatedUser); // Respond with the updated user data
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  // Delete user by ID
  async deleteUserById(req, res) {
    console.log("deleteUserById endpoint");
    this.debugInfo(req);

    try {
      const deleted = await user.destroy({
        where: { id: req.params.id }, // Delete the user with the specified ID
      });
      if (deleted) {
        res.status(204).send(); // Respond with a 204 status for successful deletion
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}

module.exports = new UserController();
