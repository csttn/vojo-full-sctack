import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { IJobs } from './interface/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async listarTodos(): Promise<IJobs[]> {
    return this.jobsService.listarTodos();
  }
}
