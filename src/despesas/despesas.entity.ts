import { CentroCusto } from 'src/centro-custo/centro-custo.entity';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Despesa {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fonte: number;
  @Column()
  data: Date;
  @Column()
  destinado: string;
  @Column({type: 'real'})
  valor: string;
  @ManyToOne(() => Pessoas)
  @JoinColumn()
  pagoa: Pessoas;
  @ManyToOne(() => CentroCusto)
  @JoinColumn()
  centrocusto: CentroCusto;
}
