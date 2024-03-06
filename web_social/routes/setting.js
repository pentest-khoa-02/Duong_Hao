import express from 'express';
import SettingControllers from "../controllers/SettingControllers.js";
const router = express.Router();

router.get('/', SettingControllers.show);
export default router;