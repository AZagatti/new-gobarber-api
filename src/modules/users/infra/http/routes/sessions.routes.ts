import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';
import sessionsValidator from '../validators/SessionsValidator';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsValidator.create, sessionsController.create);

export default sessionsRouter;
