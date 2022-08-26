import { Router } from 'express';
import { 
  getClientsRequest,
  getClientRequest,
  postClientRequest,
  putClientsRequest,
  deleteClientsRequest
} from '../controllers/client.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.get("/api/client",verifyToken,getClientsRequest);
// router.get("/api/client",getClientsRequest);
router.get("/api/client/:id",getClientRequest);
router.post("/api/client",postClientRequest);
router.put("/api/client/:id",putClientsRequest);
router.delete("/api/client/:id",deleteClientsRequest);

export default router;
