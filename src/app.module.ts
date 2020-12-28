import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCustoModule } from './centro-custo/centro-custo.module';
import { DespesasModule } from './despesas/despesas.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { RecebiveisModule } from './recebiveis/recebiveis.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ServicosModule } from './servicos/servicos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'FIREwall1',
      database: 'dpaulacont',
      synchronize: true,
      autoLoadEntities: true,
    }),
    CentroCustoModule,
    PessoasModule,
    ServicosModule,
    ReceitasModule,
    DespesasModule,
    RecebiveisModule
  ],
  providers: [],
})
export class AppModule {}
