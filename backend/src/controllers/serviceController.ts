import { Request, Response } from 'express'
import Service from '../models/Service'

// @desc    Create a new service
// @route   POST /api/services
// @access  Private/Provider
export const createService = async (req: Request, res: Response) => {
  try {
    // Add the provider ID from the authenticated user
    req.body.provider = req.user._id

    const service = await Service.create(req.body)

    res.status(201).json(service)
  } catch (error: any) {
    console.error('Create service error:', error)
    res.status(500).json({
      message: 'Server error while creating service',
      error: error.message,
    })
  }
}

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getAllServices = async (req: Request, res: Response) => {
  try {
    const { category, location, minPrice, maxPrice, search } = req.query
    
    // Build the filter object
    const filter: any = {}
    
    // Add category filter if provided
    if (category) {
      filter.category = category
    }
    
    // Add price range filter if provided
    if (minPrice || maxPrice) {
      filter.pricing = {}
      if (minPrice) filter.pricing.basePrice = { $gte: Number(minPrice) }
      if (maxPrice) filter.pricing.basePrice = { ...filter.pricing.basePrice, $lte: Number(maxPrice) }
    }
    
    // Add text search if provided
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ]
    }
    
    // Execute the query
    const services = await Service.find(filter)
      .populate('provider', 'name profilePicture')
      .sort({ createdAt: -1 })
    
    res.status(200).json(services)
  } catch (error: any) {
    console.error('Get all services error:', error)
    res.status(500).json({
      message: 'Server error while fetching services',
      error: error.message,
    })
  }
}

// @desc    Get a single service by ID
// @route   GET /api/services/:id
// @access  Public
export const getServiceById = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id).populate(
      'provider',
      'name profilePicture bio'
    )

    if (!service) {
      return res.status(404).json({ message: 'Service not found' })
    }

    res.status(200).json(service)
  } catch (error: any) {
    console.error('Get service by ID error:', error)
    res.status(500).json({
      message: 'Server error while fetching service',
      error: error.message,
    })
  }
}

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Provider
export const updateService = async (req: Request, res: Response) => {
  try {
    let service = await Service.findById(req.params.id)

    if (!service) {
      return res.status(404).json({ message: 'Service not found' })
    }

    // Check if the user is the provider of this service
    if (service.provider.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: 'Not authorized to update this service',
      })
    }

    // Update the service
    service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json(service)
  } catch (error: any) {
    console.error('Update service error:', error)
    res.status(500).json({
      message: 'Server error while updating service',
      error: error.message,
    })
  }
}

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Provider
export const deleteService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id)

    if (!service) {
      return res.status(404).json({ message: 'Service not found' })
    }

    // Check if the user is the provider of this service
    if (service.provider.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: 'Not authorized to delete this service',
      })
    }

    await service.deleteOne()

    res.status(200).json({ message: 'Service removed' })
  } catch (error: any) {
    console.error('Delete service error:', error)
    res.status(500).json({
      message: 'Server error while deleting service',
      error: error.message,
    })
  }
}

// @desc    Get services by provider
// @route   GET /api/services/provider/:providerId
// @access  Public
export const getServicesByProvider = async (req: Request, res: Response) => {
  try {
    const services = await Service.find({ provider: req.params.providerId })
      .populate('provider', 'name profilePicture')
      .sort({ createdAt: -1 })

    res.status(200).json(services)
  } catch (error: any) {
    console.error('Get services by provider error:', error)
    res.status(500).json({
      message: 'Server error while fetching services',
      error: error.message,
    })
  }
} 