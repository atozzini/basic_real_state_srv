import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";

const router = Router();

router.post('/createusers', UserController.createUser);
router.post('/session', SessionController.createSession);

export { router }
