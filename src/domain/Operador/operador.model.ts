import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'LOGIN_OPERADOR',
  timestamps: false,
  schema: 'dbo',
  freezeTableName: true,
})
export class Operador extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  base: string;

  @Column({ field: 'cod_recup' })
  codRecup: string;

  @Column({ field: 'cod_grupo' })
  codGrupo: string;

  @Column
  status: string;
}
