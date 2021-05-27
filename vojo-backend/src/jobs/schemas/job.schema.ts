import * as mongoose from 'mongoose';

export const JobsSchema = new mongoose.Schema(
  {
    compensation: {
      currency: { type: String, trim: true },
      recurrency: { type: String },
      amount: { type: Number },
    },
    active: { type: Boolean },
    open: { type: Boolean },
    description: [{ type: String }],
    requirements: { type: String },
    totalSpots: { type: Number },
    title: { type: String },
    information: { type: String },
    location: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    education: { type: String },
    company: { type: String },
    imageUrl: { type: String },
    assignments: [{ type: String }],
    isActive: { type: Boolean },
    workingHours: { type: String },
  },
  { timestamps: true, collection: 'jobs' },
);
