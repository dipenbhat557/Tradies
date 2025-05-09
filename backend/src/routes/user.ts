import express from 'express'
import {
  getUserProfile,
  updateUserProfile,
  getServiceProviders,
} from '../controllers/userController'
import { protect } from '../middleware/auth'

const router = express.Router()

// Public routes
router.get('/providers', getServiceProviders)
router.get('/:id', getUserProfile)

// Protected routes
router.put('/profile', protect, updateUserProfile)

export default router 