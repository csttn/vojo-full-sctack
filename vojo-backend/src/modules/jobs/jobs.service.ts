import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IJobs } from './interface/jobs.interface';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Jobs') private jobModel: Model<IJobs>) {}

  async list(): Promise<IJobs[]> {
    return this.jobModel.find().exec();
  }

  async update(id: string, job: IJobs): Promise<IJobs> {
    return this.jobModel.findByIdAndUpdate(id, job).exec();
  }
}
