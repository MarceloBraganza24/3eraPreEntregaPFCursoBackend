import { Router } from 'express';
import { register, login }from '../controllers/users.controller.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.post('/login', login);
router.post('/register', register);

export default router;