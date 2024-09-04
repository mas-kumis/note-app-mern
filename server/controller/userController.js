import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      if (user) {
        res.status(201).json({
          _id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          isAdmin: user.isAdmin,
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export { createUser, getUsers };
