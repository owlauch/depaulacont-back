import { ApiProperty } from '@nestjs/swagger';

export class CreateServicoDto {
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  valor_padrao: number;
}
