import { Router } from 'express';
import { postClientRequest } from '../controllers/login.controller.js';

const router = Router();

router.post("/api/login",postClientRequest);

export default router;
