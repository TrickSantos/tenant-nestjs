import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '@config/configuration';
import { OperadorDomainModule } from '@domain/Operador/operador.module';
import { ConnectionDomainModule } from '@domain/Connection/connection.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { OperadorController } from '@domain/Operador/operador.controller';
import { Connection } from '@domain/Connection/connection.model';
import { Operador } from '@domain/Operador/operador.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...configuration().database,
        models: [Connection, Operador],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    ConnectionDomainModule,
    OperadorDomainModule,
  ],
  controllers: [OperadorController],
  providers: [AppService],
})
export class AppModule {}
