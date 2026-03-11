// Create mini express app (router)
import exp from "express";
import { UserModel } from "../Models/UserModel.js";

const userApp = exp.Router();

// ---------------- USER API ROUTES ----------------

// Create User
userApp.post("/users", async (req, res) => {
  try {
    const newUser = req.body;

    const newUserDocument = new UserModel(newUser);

    const savedUser = await newUserDocument.save();

    res.status(201).json({
      message: "User created",
      payload: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message
    });
  }
});


// Read all Users
userApp.get("/users", async (req, res) => {
  try {
    const usersList = await UserModel.find({ status: true });

    res.status(200).json({
      message: "Users list",
      payload: usersList
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message
    });
  }
});


// Read a User by ID
userApp.get("/users/:id", async (req, res) => {
  try {
    const uid = req.params.id;

    const user = await UserModel.findOne({
      _id: uid,
      status: true
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User found",
      payload: user
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message
    });
  }
});


// Delete User (soft delete)
userApp.delete("/users/:id", async (req, res) => {
  try {
    const uid = req.params.id;

    const user = await UserModel.findByIdAndUpdate(
      uid,
      { $set: { status: false } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User removed"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message
    });
  }
});


// Activate User
userApp.patch("/users/:id", async (req, res) => {
  try {
    const uid = req.params.id;

    const user = await UserModel.findByIdAndUpdate(
      uid,
      { $set: { status: true } },
      { new: true }
    );

    res.status(200).json({
      message: "User activated",
      payload: user
    });

  } catch (error) {
    res.status(500).json({
      message: "Error activating user",
      error: error.message
    });
  }
});


// Update User
userApp.put("/users/:id", async (req, res) => {
  try {
    const uid = req.params.id;

    const updatedUser = await UserModel.findByIdAndUpdate(
      uid,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated",
      payload: updatedUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message
    });
  }
});


// Export router (IMPORTANT FIX)
export default userApp;