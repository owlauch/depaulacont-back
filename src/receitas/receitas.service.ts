import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { Receita } from './receitas.entity';
import { getManager } from 'typeorm';
import { Despesa } from 'src/despesas/despesas.entity';
import { Pessoas } from 'src/pessoas/pessoas.entity';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(Receita)
    private readonly receitaRepository: Repository<Receita>,
    @InjectRepository(Pessoas)
    private readonly pessoasRepository: Repository<Pessoas>,
  ) {}

  create(createReceita: Receita): Promise<Receita> {
    return this.receitaRepository.save(createReceita);
  }

  async findAll(): Promise<Receita[]> {
    return await this.receitaRepository.find({
      relations: ['cliente', 'servico'],
    });
  }

  findOne(id: string): Promise<Receita> {
    return this.receitaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.receitaRepository.delete(id);
  }

  async valores() {
    const receita = await getManager()
      .createQueryBuilder(Receita, 'receita')
      .select('SUM(receita.valor)', 'sum')
      .where('receita.fonte = :fonte', { fonte: 1 })
      .getRawOne();
    const despesa = await getManager()
      .createQueryBuilder(Despesa, 'despesa')
      .select('SUM(despesa.valor)', 'sum')
      .where('despesa.fonte = :fonte', { fonte: 1 })
      .getRawOne();
    const receitabanco = await getManager()
      .createQueryBuilder(Receita, 'receita')
      .select('SUM(receita.valor)', 'sum')
      .where('receita.fonte = :fonte', { fonte: 2 })
      .getRawOne();
    const despesabanco = await getManager()
      .createQueryBuilder(Despesa, 'despesa')
      .select('SUM(despesa.valor)', 'sum')
      .where('despesa.fonte = :fonte', { fonte: 2 })
      .getRawOne();
    return {
      receita: {
        dinheiro: receita.sum,
        banco: receitabanco.sum,
      },
      despesa: {
        dinheiro: despesa.sum,
        banco: despesabanco.sum,
      },
    };
  }

  async honorarios(identificao) {
    let query = await createQueryBuilder('Pessoas')
      .leftJoinAndSelect('Pessoas.receitas', 'Receita')
      .innerJoin('Receita.servico', 'Servicos')
      .where('Pessoas.id = :id', { id: identificao })
      .andWhere('Servicos.id = 10')
      .getMany();
    return query;
  }
}
