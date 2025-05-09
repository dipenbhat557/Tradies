import express from 'express'
import {
  createReview,
  getServiceReviews,
  getProviderReviews,
  updateReview,
  deleteReview,
} from '../controllers/reviewController'
import { protect } from '../middleware/auth'

const router = express.Router()

// Public routes
router.get('/service/:serviceId', getServiceReviews)
router.get('/provider/:providerId', getProviderReviews)

// Protected routes
router.post('/', protect, createReview)
router.put('/:id', protect, updateReview)
router.delete('/:id', protect, deleteReview)

export default router 