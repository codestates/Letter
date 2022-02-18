import * as express from 'express';
const router = express.Router();
import signupController from '../controllers/user/Signup';
import loginController from '../controllers/user/Login';
import logoutController from '../controllers/user/logout';
import updateController from '../controllers/user/update';

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout',logoutController);
router.patch('/update', updateController);

export default router;