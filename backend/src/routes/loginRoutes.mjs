import express from 'express';
import loginController from '../controllers/loginController.mjs';

const router = express.Router();

router.post('/', loginController.login);

export default router; 