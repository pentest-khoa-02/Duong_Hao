import express from 'express';
import PagesControllers from "../controllers/PagesControllers.js";
const router = express.Router();

router.get('/', PagesControllers.show);

export default router;