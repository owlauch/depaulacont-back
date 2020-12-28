import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { Pessoas } from './pessoas.entity';
import { PessoasService } from './pessoas.service';

@Controller('pessoas')
@ApiTags("Pessoas")
export class PessoasController {
  constructor(private readonly pessoaService: PessoasService) {}

  @Post()
  create(@Body() createPessoa: CreatePessoaDto): Promise<Pessoas> {
    return this.pessoaService.create(createPessoa);
  }

  @Get()
  findAll(): Promise<Pessoas[]> {
    return this.pessoaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pessoas> {
    return this.pessoaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pessoaService.remove(id);
  }
}
