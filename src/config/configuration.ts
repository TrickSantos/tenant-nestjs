import { Dialect } from 'sequelize/types';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    dialect: (process.env.DIALECT as Dialect) || ('mssql' as Dialect),
    name: process.env.DATABASE_NAME || 'SRC_DEV',
    database: process.env.DATABASE_NAME || 'SRC_DEV',
    port: Number(process.env.DATABASE_PORT) || 1433,
    username: process.env.DATABASE_USER || 'srcweb',
    password: process.env.DATABASE_PASSWORD || 'p6Dmd8sP3NXtzTCV',
    description: process.env.DATABASE_DESCRIPTION || 'PADRAO',
    host: process.env.DATABASE_HOST || '10.10.10.17',
    connectionNumber: 1,
  },
});
