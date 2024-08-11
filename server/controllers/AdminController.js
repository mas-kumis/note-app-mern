import Admin from "../models/AdminModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const createAdmins = asyncHandler(async (req, res) => {
  // Variabel-variabel ini akan digunakan untuk membuat data admin baru.
  const { name, email, password } = req.body;
  //   Validasi input - akan error apabila tidak terisi semua.
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Validasi email
  const adminEmail = await Admin.findOne({ email });
  if (adminEmail) {
    res.status(400);
    throw new Error("Email already exists");
  }
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // Buat Data di Database
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    const savedAdmin = await newAdmin.save();
    // Cookies & Token
    generateToken(res, savedAdmin._id);
    // Response
    res.status(200).json({
      message: "Admin created",
      _id: savedAdmin._id,
      username: savedAdmin.username,
      email: savedAdmin.email,
      password: savedAdmin.password,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Admin data");
  }
});

const getAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find({});
  res.json(admins);
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.cookie("jwt", generateToken(res, admin._id), { httpOnly: true });
    res.status(200).json({
      message: "Login Successful",
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      password: admin.password,
    });
    return;
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const getAdminsById = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (admin) {
    res.json(admin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

const deleteAdmins = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  try {
    await admin.deleteOne();
    res.json({ message: "Admin removed" });
  } catch (error) {
    res.status(404);
    throw new Error("Admin not found");
  }
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "Logout Successful" });
});

export { createAdmins, getAdmins, deleteAdmins, getAdminsById, login, logout };
