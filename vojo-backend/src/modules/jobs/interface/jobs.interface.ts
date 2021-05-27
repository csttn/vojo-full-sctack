import { Document } from 'mongoose';

export interface IJobs extends Document {
  compensation: {
    currency: string;
    recurrency: string;
    amount: number;
  };
  active: boolean;
  open: boolean;
  description: Array<string>;
  requirements: string;
  totalSpots: number;
  title: string;
  information: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  education: string;
  company: string;
  imageUrl?: string;
  assignments: Array<string>;
  isActive: boolean;
  workingHours: string;
}
