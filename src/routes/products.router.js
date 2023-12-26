import { Router } from 'express';
import { getAll, save }from '../controllers/products.controller.js';
import passport from 'passport';
import { authorization } from '../utils.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/', passport.authenticate('jwt', { session: false }), authorization('user'), getAll);
router.post('/', save);

export default router;

