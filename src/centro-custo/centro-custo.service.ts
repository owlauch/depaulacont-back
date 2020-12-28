import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroCusto } from './centro-custo.entity';

@Injectable()
export class CentroCustoService {
  constructor(
    @InjectRepository(CentroCusto)
    private readonly ccRepository: Repository<CentroCusto>,
  ) {}

  create(descricao: string): Promise<CentroCusto> {
    const cc = new CentroCusto();
    cc.descricao = descricao;
    return this.ccRepository.save(cc);
  }

  async findAll(): Promise<CentroCusto[]> {
    return this.ccRepository.find();
  }

  findOne(id: string): Promise<CentroCusto> {
    return this.ccRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ccRepository.delete(id);
  }
}
