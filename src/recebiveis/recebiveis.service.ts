import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Repository } from 'typeorm';
import { CreateRecebiveisDto } from './dto/CreateRecebiveisDto';
import { Recebiveis } from './recebiveis.entity';

@Injectable()
export class RecebiveisService {
  constructor(
    @InjectRepository(Recebiveis)
    private readonly recebiveisRepository: Repository<Recebiveis>,
    @InjectRepository(Pessoas)
    private readonly pessoasRepository: Repository<Pessoas>,
  ) {}

  async create(createServico: CreateRecebiveisDto): Promise<Recebiveis> {
    let rec = new Recebiveis();
    rec.ano = createServico.ano;
    rec.mes = createServico.mes;
    rec.credor = await this.pessoasRepository.findOne(createServico.credor);
    rec.descricao = createServico.descricao;
    rec.valor = createServico.valor;
    return this.recebiveisRepository.save(rec);
  }

  async findAll(): Promise<Recebiveis[]> {
    return this.recebiveisRepository.find();
  }

  findOne(id: string): Promise<Recebiveis> {
    return this.recebiveisRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.recebiveisRepository.delete(id);
  }
}
