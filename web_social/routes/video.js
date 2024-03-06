import express from 'express';
import VideoControllers from "../controllers/VideoControllers.js"
const router = express.Router();

router.get('/', VideoControllers.show);

export default router;