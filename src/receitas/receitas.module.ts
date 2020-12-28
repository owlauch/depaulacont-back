import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receitas.entity';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { ServicosModule } from 'src/servicos/servicos.module';
import { Pessoas } from 'src/pessoas/pessoas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receita,Pessoas]), PessoasModule, ServicosModule],
  providers: [ReceitasService],
  controllers: [ReceitasController],
})
export class ReceitasModule {}
