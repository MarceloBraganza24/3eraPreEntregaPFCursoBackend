import { Router } from 'express';
import { getAll, save, update, eliminate, finalizePurchase }from '../controllers/carts.controller.js';
import passport from 'passport';
import { authorization } from '../utils.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/', getAll);
router.post('/', passport.authenticate('jwt', { session: false }), authorization('user'), save);
router.post('/:cid/purchase', finalizePurchase);
router.put('/:cid', update);
router.delete('/:cid', eliminate);

export default router;