import { Request, Response } from 'express'
import Review from '../models/Review'
import Booking from '../models/Booking'

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Private
export const createReview = async (req: Request, res: Response) => {
  try {
    const { bookingId, rating, comment, images } = req.body

    // Find the booking
    const booking = await Booking.findById(bookingId)
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    // Check if user is the customer of this booking
    if (booking.customer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Check if booking is completed
    if (booking.status !== 'completed') {
      return res.status(400).json({
        message: 'Cannot review a booking that is not completed',
      })
    }

    // Check if review already exists for this booking
    const existingReview = await Review.findOne({ booking: bookingId })
    if (existingReview) {
      return res.status(400).json({
        message: 'Review already exists for this booking',
      })
    }

    // Create review
    const review = await Review.create({
      service: booking.service,
      booking: bookingId,
      customer: req.user._id,
      provider: booking.provider,
      rating,
      comment,
      images: images || [],
    })

    res.status(201).json(review)
  } catch (error: any) {
    console.error('Create review error:', error)
    res.status(500).json({
      message: 'Server error while creating review',
      error: error.message,
    })
  }
}

// @desc    Get reviews for a service
// @route   GET /api/reviews/service/:serviceId
// @access  Public
export const getServiceReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ service: req.params.serviceId })
      .populate('customer', 'name profilePicture')
      .sort({ createdAt: -1 })

    res.status(200).json(reviews)
  } catch (error: any) {
    console.error('Get service reviews error:', error)
    res.status(500).json({
      message: 'Server error while fetching reviews',
      error: error.message,
    })
  }
}

// @desc    Get reviews for a provider
// @route   GET /api/reviews/provider/:providerId
// @access  Public
export const getProviderReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ provider: req.params.providerId })
      .populate('service', 'title')
      .populate('customer', 'name profilePicture')
      .sort({ createdAt: -1 })

    res.status(200).json(reviews)
  } catch (error: any) {
    console.error('Get provider reviews error:', error)
    res.status(500).json({
      message: 'Server error while fetching reviews',
      error: error.message,
    })
  }
}

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = async (req: Request, res: Response) => {
  try {
    const { rating, comment, images } = req.body
    const review = await Review.findById(req.params.id)

    if (!review) {
      return res.status(404).json({ message: 'Review not found' })
    }

    // Check if user is the customer who created this review
    if (review.customer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Update review
    review.rating = rating || review.rating
    review.comment = comment || review.comment
    review.images = images || review.images

    await review.save()

    res.status(200).json(review)
  } catch (error: any) {
    console.error('Update review error:', error)
    res.status(500).json({
      message: 'Server error while updating review',
      error: error.message,
    })
  }
}

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findById(req.params.id)

    if (!review) {
      return res.status(404).json({ message: 'Review not found' })
    }

    // Check if user is the customer who created this review
    if (review.customer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' })
    }

    await review.deleteOne()

    res.status(200).json({ message: 'Review removed' })
  } catch (error: any) {
    console.error('Delete review error:', error)
    res.status(500).json({
      message: 'Server error while deleting review',
      error: error.message,
    })
  }
} 