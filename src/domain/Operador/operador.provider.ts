import { Operador } from './operador.model';

export const operadorProvider = [
  {
    provide: 'OperadorRepository',
    useValue: Operador,
  },
];
