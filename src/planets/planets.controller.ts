import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { IPlanet } from 'src/interfaces/planet.interface';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { INITIAL_PAGE } from 'src/constants/initialValues';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async getPlanets(
    @Query('page') page: string,
  ): Promise<IDefaultResponse<IPlanet>> {
    return this.planetsService.getPlanets(Number(page || INITIAL_PAGE));
  }

  @Get('/:name')
  async getPlanetByName(@Param('name') name: string): Promise<IPlanet> {
    return this.planetsService.getPlanetByName(name);
  }
}
