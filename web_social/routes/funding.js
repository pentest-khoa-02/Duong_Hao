import express from 'express';
import FundingController from '../controllers/FundingControllers.js';
const router = express.Router();

router.get('/', FundingController.show);

export default router;