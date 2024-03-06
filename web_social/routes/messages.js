import express from 'express';
import MessagesControllers from "../controllers/MessagesControllers.js"
const router = express.Router();

router.get('/', MessagesControllers.show);

export default router;