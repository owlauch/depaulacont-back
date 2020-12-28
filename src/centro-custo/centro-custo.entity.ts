import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CentroCusto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
}
