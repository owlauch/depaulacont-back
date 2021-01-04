import { Despesa } from 'src/despesas/despesas.entity';
import { Receita } from 'src/receitas/receitas.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany } from 'typeorm';

@Entity()
export class Pessoas {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column({ nullable: true })
  email?: string;
  @Column({ nullable: true })
  banco?: string;
  @Column({ nullable: true })
  agencia?: string;
  @Column({ nullable: true })
  conta?: string;
  @Column({ nullable: true })
  telefone?: string;
  @Column({ nullable: true })
  nsc?: string;
  @Column({ nullable: true })
  titulo?: string;
  @Column({ nullable: true })
  cnpj?: string;
  @Column({ nullable: true })
  cpf?: string;
  @Column({ nullable: true })
  senha_simples?: string;
  @Column({ nullable: true })
  senha_certificado?: string;
  @Column({ nullable: true })
  senha_nfs?: string;
  @Column({ nullable: true })
  cliente_mensal: boolean;
  @OneToMany((type) => Receita, (receita) => receita.cliente)
  @JoinColumn()
  receitas: Receita[];
  
}
