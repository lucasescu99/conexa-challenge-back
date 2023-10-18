import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { IFilm } from 'src/interfaces/film.interface';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { INITIAL_PAGE } from 'src/constants/initialValues';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async getFilms(
    @Query('page') page: string,
  ): Promise<IDefaultResponse<IFilm>> {
    return this.filmsService.getFilms(Number(page || INITIAL_PAGE));
  }

  @Get(':name')
  async getFilmByName(@Param('name') name: string): Promise<IFilm> {
    return this.filmsService.getFilmByName(name);
  }
}
