import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  banco?: string;
  @ApiProperty()
  agencia?: string;
  @ApiProperty()
  conta?: string;
  @ApiProperty()
  telefone?: string;
  @ApiProperty()
  nsc?: string;
  @ApiProperty()
  titulo?: string;
  @ApiProperty()
  cnpj?: string;
  @ApiProperty()
  cpf?: string;
  @ApiProperty()
  senha_simples?: string;
  @ApiProperty()
  senha_certificado?: string;
  @ApiProperty()
  senha_nfs?: string;
}
