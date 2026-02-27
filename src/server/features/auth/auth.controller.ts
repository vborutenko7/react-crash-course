import type { Request, Response } from 'express';

export class AuthController {
  async login(req: Request, res: Response) {
    console.log('login request body', req.body);
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
    });
  }
}

export const authController = new AuthController();
