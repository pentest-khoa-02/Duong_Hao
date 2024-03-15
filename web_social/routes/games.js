import express from 'express';
import GamesControllers from "../controllers/GamesControllers.js";
const router = express.Router();

router.get('/', GamesControllers.show);

export default router;