import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import profileValidator from '../validators/ProfileValidator';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileValidator.update, profileController.update);

export default profileRouter;
