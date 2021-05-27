import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsSchema } from './schemas/job.schema';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Jobs', schema: JobsSchema }])],
  exports: [],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
