import express from "express";
import User from "../Models/UserModel.js";

const userApi = express.Router();

/* CREATE USER */
userApi.post("/create-user", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      payload: newUser,
    });
  } catch (err) {
    next(err);
  }
});

/* GET ALL USERS */
userApi.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();

    res.json({
      message: "All users fetched",
      payload: users,
    });
  } catch (err) {
    next(err);
  }
});

/* GET USER BY ID */
userApi.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User found",
      payload: user,
    });
  } catch (err) {
    next(err);
  }
});

/* UPDATE USER */
userApi.put("/users/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "User updated",
      payload: updatedUser,
    });
  } catch (err) {
    next(err);
  }
});

/* DELETE USER */
userApi.delete("/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted",
      payload: deletedUser,
    });
  } catch (err) {
    next(err);
  }
});

export default userApi;