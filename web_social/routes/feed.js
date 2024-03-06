import express from 'express';
import FeedControllers from "../controllers/FeedControllers.js";
const router = express.Router();

router.get('/', FeedControllers.show);

export default router;