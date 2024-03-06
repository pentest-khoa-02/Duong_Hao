import express from 'express';
import MarketController from "../controllers/MarketController.js";
const router = express.Router();

router.get('/', MarketController.show);

export default router;