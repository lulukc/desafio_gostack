import { Router } from 'express';

import loginController from './app/controllers/loginController';
import studentsController from './app/controllers/studentsController';
import plansController from './app/controllers/plansController';
import enrollmentsController from './app/controllers/enrollmentsController';
import checkinController from './app/controllers/checkinController';
import helpOrdersController from './app/controllers/helpOrdersController';
import authController from './app/ middlewares/auth';

const routes = new Router();

routes.post('/login', loginController.store);

routes.get('/student/:id/checkins', checkinController.index);
routes.post('/student/:id/checkins', checkinController.store);

routes.post('/student/:id/help-orders', helpOrdersController.store);

routes.get('/plans', plansController.index);

routes.use(authController);
routes.post('/studentregistration', studentsController.store);

routes.get('/help-orders', helpOrdersController.index);
routes.put('/help-orders/:id', helpOrdersController.update);

routes.post('/plans', plansController.store);
routes.put('/plans/:id', plansController.update);
routes.delete('/plans/:id', plansController.delete);

routes.post('/enrollment', enrollmentsController.store);

export default routes;
