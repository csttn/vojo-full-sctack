import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { IJobs } from './interface/jobs.interface';

@Controller('v3/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async listarTodos(): Promise<IJobs[]> {
    return this.jobsService.list();
  }

  //não consgui adicioanr o middleware para token nesta rota
  // o fluxo para edição de jobs esta no frontend, onde o usuario faz a validação na rota v3/auth/me
  // e logo depois edita os dados :/

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() jobUpdate: IJobs,
  ): Promise<IJobs> {
    return this.jobsService.update(id, jobUpdate);
  }
}
