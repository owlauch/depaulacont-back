import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateServicoDto } from './dto/create-servico';
import { Servicos } from './servicos.entity';
import { ServicosService } from './servicos.service';

@Controller('servicos')
@ApiTags('Servicos')
export class ServicosController {
  constructor(private readonly pessoaService: ServicosService) {}

  @Post()
  create(@Body() createServico: CreateServicoDto): Promise<Servicos> {
    return this.pessoaService.create(createServico);
  }

  @Get()
  findAll(): Promise<Servicos[]> {
    return this.pessoaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Servicos> {
    return this.pessoaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pessoaService.remove(id);
  }
}
