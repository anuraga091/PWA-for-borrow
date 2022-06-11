import express from 'express';
import { userSend, userBorrow } from '../controller/amount_controller.js';

import { userSignup, userLogin } from '../controller/user_controller.js';


const router = express.Router();

router.post('/signup',userSignup);
// router.post('/login',userLogin);


router.post('/borrow', userBorrow);

router.post('/send', userSend);


export default router;