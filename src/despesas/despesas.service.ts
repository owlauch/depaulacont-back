import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentroCusto } from 'src/centro-custo/centro-custo.entity';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Repository } from 'typeorm';
import { Despesa } from './despesas.entity';
import { CreateDespesasDto } from './dto/create-despesas.dto';

@Injectable()
export class DespesasService {
  constructor(
    @InjectRepository(Despesa)
    private readonly despesaRepository: Repository<Despesa>,
  ) {}

  create(despesa: Despesa): Promise<Despesa> {
    return this.despesaRepository.save(despesa);
  }

  async findAll(): Promise<Despesa[]> {
    return await this.despesaRepository.find({
      relations: ['centrocusto', 'pagoa'],
    });
  }

  findOne(id: string): Promise<Despesa> {
    return this.despesaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.despesaRepository.delete(id);
  }
}
