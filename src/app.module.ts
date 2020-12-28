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
      entities: ['dist/**/*.entity.js'],
      url:
        'postgres://rwmoziodfvrlto:4e5b4d14bca5ef68899f2015c71808ff977dcf7460e5669a39f60ecdce0088d7@ec2-54-144-109-253.compute-1.amazonaws.com:5432/d5s2g3ov8dh2ni',
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
    }),
    CentroCustoModule,
    PessoasModule,
    ServicosModule,
    ReceitasModule,
    DespesasModule,
    RecebiveisModule,
  ],
  providers: [],
})
export class AppModule {}
