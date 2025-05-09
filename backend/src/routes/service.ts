import express from 'express'
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getServicesByProvider,
} from '../controllers/serviceController'
import { protect, authorize } from '../middleware/auth'

const router = express.Router()

// Public routes
router.get('/', getAllServices)
router.get('/:id', getServiceById)
router.get('/provider/:providerId', getServicesByProvider)

// Protected routes
router.post('/', protect, authorize('provider'), createService)
router.put('/:id', protect, authorize('provider'), updateService)
router.delete('/:id', protect, authorize('provider'), deleteService)

export default router 