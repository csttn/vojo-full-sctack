import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IJobs } from './interface/jobs.interface';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Jobs') private jobsModel: Model<IJobs>) {}

  async listarTodos(): Promise<IJobs[]> {
    return this.jobsModel.find().exec();
  }
}
