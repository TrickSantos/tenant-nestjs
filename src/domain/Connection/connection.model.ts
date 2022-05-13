import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'BASES',
  freezeTableName: true,
  modelName: 'Connection',
})
export class Connection extends Model {
  @Column({ field: 'ID', primaryKey: true })
  id: string;

  @Column({ field: 'HEADER_KEY' })
  headerKey: number;

  @Column({ field: 'STRING_CONEXAO' })
  stringConnection: string;
}
