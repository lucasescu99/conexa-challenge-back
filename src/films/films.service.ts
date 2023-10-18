import { Injectable } from '@nestjs/common';
import { ErrorManager } from 'src/utils/errorHandler';
import { IFilm } from 'src/interfaces/film.interface';
import { HttpCustomService } from 'src/providers/http/http.service';
import { IDefaultResponse } from 'src/interfaces/response.interface';

@Injectable()
export class FilmsService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getFilms(page: number): Promise<IDefaultResponse<IFilm>> {
    try {
      return this.httpService.getAll<IFilm>(
        process.env.API_BASE_URL,
        'films',
        page,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getFilmByName(name: string): Promise<IFilm> {
    try {
      return this.httpService.getEntityByName<IFilm>(
        process.env.API_BASE_URL,
        'films',
        name,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
