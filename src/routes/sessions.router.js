import { Router } from 'express';
import { getSession }from '../controllers/sessions.controller.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/current', getSession);

export default router;