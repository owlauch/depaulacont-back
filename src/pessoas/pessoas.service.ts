import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NOMEM } from 'dns';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { Pessoas } from './pessoas.entity';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoas)
    private readonly pessoaRepository: Repository<Pessoas>,
  ) {}

  create(createPessoa: CreatePessoaDto): Promise<Pessoas> {
    return this.pessoaRepository.save(createPessoa);
  }

  async findAll(): Promise<Pessoas[]> {
    return this.pessoaRepository.find();
  }

  findOne(id: string): Promise<Pessoas> {
    return this.pessoaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pessoaRepository.delete(id);
  }
}
