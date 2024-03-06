import express from "express";
import BlogControllers from "../controllers/BlogControllers.js";
const router = express.Router();

router.get('/', BlogControllers.show);

export default router;