import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import {profileController, registerUser} from '../controllers/authControllers.js'
import {loginUser} from '../controllers/authControllers.js'
const router = express.Router()
router.post('/register',registerUser)
router.post('/login',loginUser) 
router.get('/profile',authMiddleware,profileController)
export default router;