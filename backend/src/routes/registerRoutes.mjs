import express from 'express';
import registerController from '../controllers/registerController.mjs';

const router = express.Router();

router.post('/',registerController.createUser);

export default router;