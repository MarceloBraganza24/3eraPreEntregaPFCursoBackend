import { Router } from 'express';
import { get }from '../controllers/ticket.controller.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/:tid', get);

export default router;