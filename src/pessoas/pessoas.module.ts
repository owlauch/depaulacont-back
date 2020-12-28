import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoas } from './pessoas.entity';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoas])],
  providers: [PessoasService],
  controllers: [PessoasController],
  exports: [PessoasService],
})
export class PessoasModule {}
