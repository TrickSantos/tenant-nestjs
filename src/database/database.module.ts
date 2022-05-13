import { Module } from '@nestjs/common';
import { databaseProviders } from '@database/database.provider';

@Module({
  exports: [...databaseProviders],
  providers: [...databaseProviders],
})
export class DatabaseModule {}
