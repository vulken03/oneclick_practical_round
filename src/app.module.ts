import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import { CricketModule } from './modules/cricket/cricket.module';
import { EmiModule } from './modules/emi/emi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    CategoryModule,
    CricketModule,
    EmiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
