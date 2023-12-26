import { Router } from 'express';
import { getAll, save }from '../controllers/carts.controller.js';
import { finalizePurchase }from '../controllers/ticket.controller.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/', getAll);
router.post('/', save);
router.post('/:cid/purchase', finalizePurchase);

export default router;