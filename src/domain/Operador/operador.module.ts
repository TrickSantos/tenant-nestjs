import { ConnectionDomainModule } from '@domain/Connection/connection.module';
import { Module } from '@nestjs/common';
import { OperadorController } from './operador.controller';
import { operadorProvider } from './operador.provider';
import { OperadorRepository } from './operador.repository';

@Module({
  imports: [ConnectionDomainModule],
  providers: [OperadorRepository, ...operadorProvider],
  exports: [OperadorRepository],
  controllers: [OperadorController],
})
export class OperadorDomainModule {}
