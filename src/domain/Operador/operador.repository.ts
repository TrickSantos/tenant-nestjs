import { Injectable } from '@nestjs/common';
import { ConnectionRepository } from '@domain/Connection/connection.repository';

import { Operador } from './operador.model';

@Injectable()
export class OperadorRepository {
  constructor(private connectionRespository: ConnectionRepository) {}

  public async getAllLogin(headerKey: string) {
    const connection =
      await this.connectionRespository.getConnectionByHeaderKey(headerKey);

    connection.addModels([Operador]);

    const res = await connection.model(Operador).findAll();

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(5000);
    return res;
  }
}
