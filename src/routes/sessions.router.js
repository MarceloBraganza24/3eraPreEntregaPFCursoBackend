import { Router } from 'express';
import { getSession }from '../controllers/sessions.controller.js';
import passport from 'passport';
import { authorization } from '../utils.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/current', passport.authenticate('jwt', { session: false }), authorization('admin'), getSession);

export default router;