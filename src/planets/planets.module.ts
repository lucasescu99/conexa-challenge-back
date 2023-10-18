import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  imports: [ProvidersModule],
  controllers: [PlanetsController],
  providers: [PlanetsService, HttpCustomService],
})
export class PlanetsModule {}
