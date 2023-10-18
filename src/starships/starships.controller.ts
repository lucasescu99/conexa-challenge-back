import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { IStarship } from 'src/interfaces/starship.interface';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { INITIAL_PAGE } from 'src/constants/initialValues';

@Controller('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  async getStarships(
    @Query('page') page: string,
  ): Promise<IDefaultResponse<IStarship>> {
    return this.starshipsService.getStarships(Number(page || INITIAL_PAGE));
  }

  @Get('/:name')
  async getStarshipByName(@Param('name') name: string): Promise<IStarship> {
    return this.starshipsService.getStarshipByName(name);
  }
}
