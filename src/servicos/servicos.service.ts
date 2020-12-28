import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicoDto } from './dto/create-servico';
import { Servicos } from './servicos.entity';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servicos)
    private readonly pessoaRepository: Repository<Servicos>,
  ) {}

  create(createServico: CreateServicoDto): Promise<Servicos> {
    return this.pessoaRepository.save(createServico);
  }

  async findAll(): Promise<Servicos[]> {
    return this.pessoaRepository.find();
  }

  findOne(id: string): Promise<Servicos> {
    return this.pessoaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pessoaRepository.delete(id);
  }
}
