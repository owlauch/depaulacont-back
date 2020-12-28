import { ApiProperty } from '@nestjs/swagger';

export class CreateRecebiveisDto {
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  mes: number;
  @ApiProperty()
  ano: number;
  @ApiProperty()
  valor: string;
  @ApiProperty()
  credor: number;
}
