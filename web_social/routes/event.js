import express from 'express';
import EventControllers from '../controllers/EventControllers.js';
const router = express.Router();

router.get('/', EventControllers.show);

export default router;