import express from 'express';
import FormRegisterController from '../controllers/FormRegisterControllers.js';
const router = express.Router();

router.get('/', FormRegisterController.show);

export default router;