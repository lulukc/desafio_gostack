import { Router } from 'express';

import loginController from './app/controllers/loginController';
import adminController from './app/controllers/adminController';
import studentsController from './app/controllers/studentsController';
import authController from './app/ middlewares/auth';

const routes = new Router();

routes.post('/login', loginController.store);
routes.post('/admin', adminController.store);

routes.use(authController);
routes.post('/studentregistration', studentsController.store);

export default routes;
