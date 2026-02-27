import express, { Request, Response, Router } from 'express';

import { authController } from './auth.controller.ts';

const router = Router();

// Simple GET /login route for testing or static response
router.get('/login', (req: Request, res: Response) => {
  res.send('Login page');
});

router.post('/login', authController.login.bind(authController));

export default router;
