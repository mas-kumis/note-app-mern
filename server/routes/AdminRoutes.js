import express from "express";
import {
  getAdmins,
  createAdmins,
  deleteAdmins,
  getAdminsById,
  login,
  logout,
} from "../controllers/AdminController.js";

const router = express.Router();

router.post("/register", createAdmins);
router.post("/auth", login);
router.post("/logout", logout);
router.get("/", getAdmins);
router.get("/:id", getAdminsById);
router.delete("/:id", deleteAdmins);

export default router;
