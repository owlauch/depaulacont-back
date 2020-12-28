import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { RecebiveisController } from './recebiveis.controller';
import { Recebiveis } from './recebiveis.entity';
import { RecebiveisService } from './recebiveis.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recebiveis, Pessoas]), PessoasModule],
  providers: [RecebiveisService],
  controllers: [RecebiveisController],
  exports: [RecebiveisService],
})
export class RecebiveisModule {}
