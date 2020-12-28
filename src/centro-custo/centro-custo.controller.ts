import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CentroCusto } from './centro-custo.entity';
import { CentroCustoService } from './centro-custo.service';

@Controller('CentroCusto')
@ApiTags('Centro de custo')
export class CentroCustoController {
  constructor(private readonly ccService: CentroCustoService) {}

  @Post()
  create(@Body() descricao: string): Promise<CentroCusto> {
    return this.ccService.create(descricao);
  }

  @Get()
  findAll(): Promise<CentroCusto[]> {
    return this.ccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CentroCusto> {
    return this.ccService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ccService.remove(id);
  }
}
