import { ApiProperty } from '@nestjs/swagger';
import { CentroCusto } from 'src/centro-custo/centro-custo.entity';
import { CreateCentroCustoDto } from 'src/centro-custo/dto/create-cc.dto';
import { CreatePessoaDto } from 'src/pessoas/dto/create-pessoa.dto';

export class CreateDespesasDto {
  @ApiProperty()
  fonte: number;
  @ApiProperty()
  data: Date;
  @ApiProperty()
  destinado: string;
  @ApiProperty()
  valor: number;
  @ApiProperty()
  pagoPara: number;
  @ApiProperty()
  centroCusto: number;
}
