import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import configuration from '@config/configuration';
import { Connection } from '@domain/Connection/connection.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const { database, nodeEnv } = configuration();
      const sequelize = new Sequelize({
        ...database,
        logging:
          nodeEnv === 'development'
            ? (queryText) => console.log(`${queryText}\n`)
            : false,
        define: {
          freezeTableName: true,
        },
        dialectOptions: {
          requestTimeout: 30000,
          options: {
            useUTC: false,
            encrypt: false,
          },
          timezone: 'America/Sao_Paulo',
        },
      });

      sequelize.addModels([Connection]);
      sequelize
        .authenticate()
        .then(() => Logger.log('Database connected successfully'))
        .catch((err) => {
          Logger.error(`Error with database connection: ${err}`, 'Database');
          process.exit();
        });
      return sequelize;
    },
  },
];
