import express from 'express';
import FormLoginController from '../controllers/FormLoginControllers.js';
const router = express.Router();

router.get('/', FormLoginController.show);

export default router;