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
  @Column({ nullable: true })
  fonte: number;
  @Column({ nullable: true })
  data_pgto: Date;
  @Column({ type: 'real' })
  valor: string;
  @Column()
  ano: number;
  @Column()
  mes: number;
  @Column({ nullable: true, default: false })
  pago: boolean;
  @Column({ nullable: true, type: 'real', default: 0 })
  valor_quitado: string;
  @ManyToOne(() => Pessoas, (pessoas) => pessoas.receitas)
  @JoinColumn()
  cliente: Pessoas;
  @ManyToOne(() => Servicos)
  @JoinColumn()
  servico: Servicos;
}
