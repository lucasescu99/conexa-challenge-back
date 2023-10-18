import { Module } from '@nestjs/common';
import { FilmsController } from './films/films.controller';
import { FilmsService } from './films/films.service';
import { FilmsModule } from './films/films.module';
import { ConfigModule } from '@nestjs/config';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';
import { StarshipsModule } from './starships/starships.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    FilmsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    PeopleModule,
    PlanetsModule,
    StarshipsModule,
    HttpModule,
  ],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class AppModule {}
