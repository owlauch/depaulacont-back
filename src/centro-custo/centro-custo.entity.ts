import { Despesa } from 'src/despesas/despesas.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CentroCusto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
}
