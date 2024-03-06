import express from 'express';
import TimelineControllers from "../controllers/TimelineControllers.js";
const router = express.Router();

router.get('/', TimelineControllers.show);

export default router;