import { Request, Response } from 'express'
import Booking from '../models/Booking'
import Service from '../models/Service'

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { serviceId, date, timeSlot, address, notes } = req.body

    // Find the service
    const service = await Service.findById(serviceId)
    if (!service) {
      return res.status(404).json({ message: 'Service not found' })
    }

    // Create booking
    const booking = await Booking.create({
      service: serviceId,
      customer: req.user._id,
      provider: service.provider,
      date,
      timeSlot,
      status: 'pending',
      paymentStatus: 'pending',
      totalAmount: service.pricing.basePrice,
      address,
      notes,
    })

    res.status(201).json(booking)
  } catch (error: any) {
    console.error('Create booking error:', error)
    res.status(500).json({
      message: 'Server error while creating booking',
      error: error.message,
    })
  }
}

// @desc    Get all bookings for current user
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = async (req: Request, res: Response) => {
  try {
    const { role } = req.user

    let bookings
    if (role === 'customer') {
      // Get bookings where user is customer
      bookings = await Booking.find({ customer: req.user._id })
        .populate('service', 'title description pricing.basePrice')
        .populate('provider', 'name profilePicture')
        .sort({ date: -1 })
    } else if (role === 'provider') {
      // Get bookings where user is provider
      bookings = await Booking.find({ provider: req.user._id })
        .populate('service', 'title description pricing.basePrice')
        .populate('customer', 'name profilePicture')
        .sort({ date: -1 })
    } else {
      return res.status(403).json({ message: 'Not authorized' })
    }

    res.status(200).json(bookings)
  } catch (error: any) {
    console.error('Get user bookings error:', error)
    res.status(500).json({
      message: 'Server error while fetching bookings',
      error: error.message,
    })
  }
}

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('service', 'title description pricing.basePrice')
      .populate('customer', 'name profilePicture')
      .populate('provider', 'name profilePicture')

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    // Check if user is authorized to view this booking
    if (
      booking.customer.toString() !== req.user._id.toString() &&
      booking.provider.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    res.status(200).json(booking)
  } catch (error: any) {
    console.error('Get booking by ID error:', error)
    res.status(500).json({
      message: 'Server error while fetching booking',
      error: error.message,
    })
  }
}

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private
export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    // Check if user is authorized to update this booking
    if (booking.provider.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Update booking status
    booking.status = status
    await booking.save()

    res.status(200).json(booking)
  } catch (error: any) {
    console.error('Update booking status error:', error)
    res.status(500).json({
      message: 'Server error while updating booking status',
      error: error.message,
    })
  }
}

// @desc    Cancel booking
// @route   DELETE /api/bookings/:id
// @access  Private
export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    // Check if user is authorized to cancel this booking
    if (booking.customer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Only allow cancellation if booking is pending or confirmed
    if (!['pending', 'confirmed'].includes(booking.status)) {
      return res.status(400).json({
        message: `Cannot cancel booking with status ${booking.status}`,
      })
    }

    booking.status = 'cancelled'
    await booking.save()

    res.status(200).json({ message: 'Booking cancelled successfully' })
  } catch (error: any) {
    console.error('Cancel booking error:', error)
    res.status(500).json({
      message: 'Server error while cancelling booking',
      error: error.message,
    })
  }
} 