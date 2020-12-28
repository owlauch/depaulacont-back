import { ApiProperty } from "@nestjs/swagger";

export class CreateCentroCustoDto{
  @ApiProperty()
  id:number;
  @ApiProperty()
  descricao: string;
}