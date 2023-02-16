import express from "express";
import {
  createBank,
  deleteBank,
  getBank,
  getBanks,
  updateBank,
  updateBankAvailability,
} from "../controllers/bank.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createBank);

//UPDATE
router.put("/availability/:id", updateBankAvailability);
router.put("/:id", verifyAdmin, updateBank);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteBank);
//GET

router.get("/:id", getBank);
//GET ALL

router.get("/", getBanks);

export default router;
