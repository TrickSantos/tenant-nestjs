import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { connectionProvider } from './connection.provider';
import { ConnectionRepository } from './connection.repository';

@Module({
  imports: [DatabaseModule],
  providers: [ConnectionRepository, ...connectionProvider],
  exports: [ConnectionRepository],
})
export class ConnectionDomainModule {}
