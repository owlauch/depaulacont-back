import { Despesa } from 'src/despesas/despesas.entity';
import { Receita } from 'src/receitas/receitas.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, ManyToOne } from 'typeorm';
@Entity()
export class Servicos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column({ nullable: true })
  valor_padrao?: number;
}
