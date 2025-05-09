import express from 'express'
import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBookingStatus,
  cancelBooking,
} from '../controllers/bookingController'
import { protect } from '../middleware/auth'

const router = express.Router()

// All booking routes are protected
router.use(protect)

// Routes
router.route('/')
  .post(createBooking)
  .get(getUserBookings)

router.route('/:id')
  .get(getBookingById)
  .delete(cancelBooking)

router.route('/:id/status')
  .put(updateBookingStatus)

export default router 