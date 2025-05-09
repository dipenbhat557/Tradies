import mongoose, { Document, Schema } from 'mongoose'

export interface IService extends Document {
  title: string
  description: string
  category: string
  subcategory?: string
  pricing: {
    basePrice: number
    unit: string
  }
  images: string[]
  provider: mongoose.Types.ObjectId
  availability: {
    days: string[]
    timeSlots: {
      start: string
      end: string
    }[]
  }
  location: {
    type: string
    coordinates: number[]
    address: string
    city: string
    state: string
    zipCode: string
  }
  createdAt: Date
  updatedAt: Date
}

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    subcategory: {
      type: String,
      trim: true,
    },
    pricing: {
      basePrice: {
        type: Number,
        required: [true, 'Base price is required'],
        min: [0, 'Price cannot be negative'],
      },
      unit: {
        type: String,
        default: 'per hour',
        enum: ['per hour', 'per day', 'fixed'],
      },
    },
    images: [
      {
        type: String,
      },
    ],
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Provider is required'],
    },
    availability: {
      days: [
        {
          type: String,
          enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
      ],
      timeSlots: [
        {
          start: {
            type: String,
            required: [true, 'Start time is required'],
          },
          end: {
            type: String,
            required: [true, 'End time is required'],
          },
        },
      ],
    },
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
      address: {
        type: String,
        required: [true, 'Address is required'],
      },
      city: {
        type: String,
        required: [true, 'City is required'],
      },
      state: {
        type: String,
        required: [true, 'State is required'],
      },
      zipCode: {
        type: String,
        required: [true, 'Zip code is required'],
      },
    },
  },
  {
    timestamps: true,
  }
)

// Create index for location for geospatial queries
serviceSchema.index({ 'location.coordinates': '2dsphere' })

export default mongoose.model<IService>('Service', serviceSchema) 