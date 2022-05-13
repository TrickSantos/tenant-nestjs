import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Connection } from './connection.model';

@Injectable()
export class ConnectionRepository {
  constructor(
    @InjectModel(Connection)
    private connectionRepository: typeof Connection,
  ) {}

  public async getConnectionByHeaderKey(headerKey: string) {
    const { stringConnection } = await this.connectionRepository
      .schema('API')
      .findOne({
        where: {
          headerKey,
        },
      });

    const regex =
      /^.+;Initial Catalog=(.+);Data Source=(.+); User Id=(.+); Password=(.+);/;
    const [_, database, host, username, password] =
      stringConnection.match(regex);

    const sequelize = new Sequelize({
      dialect: 'mssql',
      schema: 'dbo',
      port: 1433,
      database,
      host,
      username,
      password,
    });

    await sequelize.authenticate();

    return sequelize;
  }
}
