import { Connection } from './connection.model';

export const connectionProvider = [
  {
    provide: 'ConnectionRepository',
    useValue: Connection,
  },
];
