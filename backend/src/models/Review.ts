import mongoose, { Document, Schema } from 'mongoose'

export interface IReview extends Document {
  service: mongoose.Types.ObjectId
  booking: mongoose.Types.ObjectId
  customer: mongoose.Types.ObjectId
  provider: mongoose.Types.ObjectId
  rating: number
  comment: string
  images?: string[]
  createdAt: Date
  updatedAt: Date
}

const reviewSchema = new Schema<IReview>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'Service is required'],
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
      required: [true, 'Booking is required'],
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Customer is required'],
    },
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Provider is required'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true,
      maxlength: [500, 'Comment cannot exceed 500 characters'],
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Prevent duplicate reviews for the same booking
reviewSchema.index({ booking: 1 }, { unique: true })

export default mongoose.model<IReview>('Review', reviewSchema) 