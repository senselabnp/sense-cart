import { Router } from 'express';

import * as authController from './controllers/auth.controller';
import * as welcomeController from './controllers/welcome.controller';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/', welcomeController.index);

export default router;
