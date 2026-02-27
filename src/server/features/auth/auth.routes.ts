import express from 'express';

import { authController } from './auth.controller.ts';

const router = express.Router();

// Simple GET /login route for testing or static response
router.get('/login', (req, res) => {
  res.send('Login page');
});

router.post('/login', authController.login.bind(authController));

export default router;
