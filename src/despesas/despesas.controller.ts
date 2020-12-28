import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CentroCustoService } from 'src/centro-custo/centro-custo.service';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { Despesa } from './despesas.entity';
import { DespesasService } from './despesas.service';
import { CreateDespesasDto } from './dto/create-despesas.dto';

@Controller('despesas')
@ApiTags('Despesas')
export class DespesasController {
  constructor(
    private despesaService: DespesasService,
    private ccService: CentroCustoService,
    private pessoasService: PessoasService,
  ) {}
  @Post()
  async create(@Body() despesa: CreateDespesasDto): Promise<Despesa> {
    const desp = new Despesa();
    desp.data = new Date();
    desp.centrocusto = await this.ccService.findOne(
      despesa.centroCusto.toString(),
    );
    desp.pagoa = await this.pessoasService.findOne(
      despesa.pagoPara.toString(),
    );
    desp.fonte = despesa.fonte;
    desp.destinado = despesa.destinado;
    desp.valor = despesa.valor.toString();
    return this.despesaService.create(desp);
  }

  @Get()
  findAll(): Promise<Despesa[]> {
    return this.despesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Despesa> {
    return this.despesaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.despesaService.remove(id);
  }
}
