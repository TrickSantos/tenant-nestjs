import { Controller, Get, Inject, Req } from '@nestjs/common';
import { OperadorRepository } from './operador.repository';

@Controller('/operador')
export class OperadorController {
  constructor(private operadorRepository: OperadorRepository) {}

  @Get()
  getAllLogin(@Req() request: any): any {
    return this.operadorRepository.getAllLogin(request.query.headerKey);
  }
}
