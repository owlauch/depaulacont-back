import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicos } from './servicos.entity';
import { ServicosService } from './servicos.service';
import { ServicosController } from './servicos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Servicos])],
  providers: [ServicosService],
  controllers: [ServicosController],
  exports: [ServicosService],
})
export class ServicosModule {}
