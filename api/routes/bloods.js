import express from "express";
import {
  countByCity,
  countByType,
  createBlood,
  deleteBlood,
  getBlood,
  getBloodBanks,
  getBloods,
  updateBlood,
} from "../controllers/blood.js";
import Blood from "../models/Blood.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createBlood);

//UPDATE
router.put("/:id", verifyAdmin, updateBlood);
//DELETE
router.delete("/:id", verifyAdmin, deleteBlood);
//GET

router.get("/find/:id", getBlood);
//GET ALL

router.get("/", getBloods);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/Bank/:id", getBloodBanks);

export default router;
