import { Router } from 'express';
import { postSaleRequest } from '../controllers/sales.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post("/api/sale",verifyToken,postSaleRequest);

export default router;
