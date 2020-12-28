import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { ServicosService } from 'src/servicos/servicos.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { Receita } from './receitas.entity';
import { ReceitasService } from './receitas.service';

@Controller('receitas')
@ApiTags('Receitas')
export class ReceitasController {
  constructor(
    private readonly receitaService: ReceitasService,
    private readonly clienteService: PessoasService,
    private readonly servicoService: ServicosService,
  ) {}

  @Post()
  async create(@Body() createReceita: CreateReceitaDto): Promise<Receita> {
    let receita = new Receita();
    receita.data_pgto = createReceita.data;
    receita.cliente = await this.clienteService.findOne(
      createReceita.clienteId.toString(),
    );
    receita.servico = await this.servicoService.findOne(
      createReceita.servicoId.toString(),
    );
    receita.ano = createReceita.ano;
    receita.mes = createReceita.mes;
    receita.fonte = createReceita.fonte;
    receita.valor = createReceita.valor.toString();
    return this.receitaService.create(receita);
  }

  @Get()
  findAll(): Promise<Receita[]> {
    return this.receitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Receita> {
    return this.receitaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.receitaService.remove(id);
  }

  @Get('/valores')
  valores() {
    return this.receitaService.valores();
  }
  @Get('/honorarios/:identificacao')
  honorarios(@Param('identificacao') identificacao: string) {
    return this.receitaService.honorarios(identificacao);
  }
}
