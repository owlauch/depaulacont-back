import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRecebiveisDto } from './dto/CreateRecebiveisDto';
import { Recebiveis } from './recebiveis.entity';
import { RecebiveisService } from './recebiveis.service';

@Controller('recebiveis')
@ApiTags('Recebiveis')
export class RecebiveisController {
  constructor(private readonly recebiveisService: RecebiveisService) {}

  @Post()
  create(@Body() createServico: CreateRecebiveisDto): Promise<Recebiveis> {
    return this.recebiveisService.create(createServico);
  }

  @Get()
  findAll(): Promise<Recebiveis[]> {
    return this.recebiveisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Recebiveis> {
    return this.recebiveisService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.recebiveisService.remove(id);
  }
}
