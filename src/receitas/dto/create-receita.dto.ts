import { ApiProperty } from '@nestjs/swagger';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Servicos } from 'src/servicos/servicos.entity';

export class CreateReceitaDto {
  @ApiProperty()
  fonte: number;
  @ApiProperty()
  data: Date;
  @ApiProperty()
  valor: number;
  @ApiProperty()
  clienteId: number;
  @ApiProperty()
  ano: number;
  @ApiProperty()
  mes: number;
  @ApiProperty()
  servicoId: number;
  @ApiProperty()
  pago: boolean;
  @ApiProperty()
  valorQuitado: number;
}
