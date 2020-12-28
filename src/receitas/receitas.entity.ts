import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Servicos } from 'src/servicos/servicos.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fonte: number;
  @Column()
  data_pgto: Date;
  @Column({type: 'real'})
  valor: string;
  @Column()
  ano: number;
  @Column()
  mes: number;
  @ManyToOne(() => Pessoas, pessoas=>pessoas.receitas)
  @JoinColumn()
  cliente: Pessoas;
  @ManyToOne(() => Servicos)
  @JoinColumn()
  servico: Servicos;
}
