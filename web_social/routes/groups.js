import express from 'express';
import GroupsController from '../controllers/GroupsController.js';
const router = express.Router();

router.get('/', GroupsController.show);

export default  router;