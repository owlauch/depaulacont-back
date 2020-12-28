import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despesa } from './despesas.entity';
import { DespesasService } from './despesas.service';
import { DespesasController } from './despesas.controller';
import { CentroCustoModule } from 'src/centro-custo/centro-custo.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Despesa]),
    PessoasModule,
    CentroCustoModule,
  ],
  providers: [DespesasService],
  controllers: [DespesasController],
})
export class DespesasModule {}
