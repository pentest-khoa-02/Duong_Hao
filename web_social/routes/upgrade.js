import express from "express";
import UpgradeControllers from "../controllers/UpgradeControllers.js";
const router = express.Router();

router.get('/', UpgradeControllers.show);

export default router;