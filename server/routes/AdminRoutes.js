import express from "express";
import {
  getAdmins,
  createAdmins,
  deleteAdmins,
  getAdminsById,
} from "../controllers/AdminController.js";

const router = express.Router();

router.post("/", createAdmins);
router.get("/", getAdmins);
router.get("/:id", getAdminsById);
router.delete("/:id", deleteAdmins);

export default router;
