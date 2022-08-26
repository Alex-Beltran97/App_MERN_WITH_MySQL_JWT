import { Router } from "express"
import { postLogin } from "../controllers/register.controller.js";

const router = Router();

router.post("/api/register",postLogin);

export default router;

