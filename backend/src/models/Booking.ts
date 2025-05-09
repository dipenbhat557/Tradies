import mongoose, { Document, Schema } from 'mongoose'

export interface IBooking extends Document {
  service: mongoose.Types.ObjectId
  customer: mongoose.Types.ObjectId
  provider: mongoose.Types.ObjectId
  date: Date
  timeSlot: {
    start: string
    end: string
  }
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'refunded'
  totalAmount: number
  address: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const bookingSchema = new Schema<IBooking>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'Service is required'],
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
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    timeSlot: {
      start: {
        type: String,
        required: [true, 'Start time is required'],
      },
      end: {
        type: String,
        required: [true, 'End time is required'],
      },
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending',
    },
    totalAmount: {
      type: Number,
      required: [true, 'Total amount is required'],
      min: [0, 'Total amount cannot be negative'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    notes: {
      type: String,
      maxlength: [500, 'Notes cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<IBooking>('Booking', bookingSchema) 