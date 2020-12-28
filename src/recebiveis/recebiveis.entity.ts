import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
@Entity()
export class Recebiveis {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column()
  mes: number;
  @Column()
  ano: number;
  @Column({type: 'real'})
  valor: string;
  @ManyToOne(() => Pessoas, pessoas=>pessoas.recebiveis)
  @JoinColumn()
  credor: Pessoas;
}
