
import express from 'express';
import authenticateUser from '../middlewares/userAuthMiddleware.js';


const router = express.Router();

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    verifyOTP,
    forgotPassword,
    resetPassword
} from '../controllers/userController.js';

import { multerUploadUserProfile } from '../config/multerConfig.js';



router.post('/', registerUser);


router.post('/otp-verification', verifyOTP);
router.post('/auth', authUser);

router.post('/logout', logoutUser);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);

router.route('/profile').get( authenticateUser, getUserProfile ).put( authenticateUser, multerUploadUserProfile.single('profileImage'), updateUserProfile );







export default router;