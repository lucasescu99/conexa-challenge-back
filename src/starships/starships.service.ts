import { Injectable } from '@nestjs/common';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { IStarship } from 'src/interfaces/starship.interface';
import { HttpCustomService } from 'src/providers/http/http.service';
import { ErrorManager } from 'src/utils/errorHandler';

@Injectable()
export class StarshipsService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getStarships(page: number): Promise<IDefaultResponse<IStarship>> {
    try {
      return this.httpService.getAll<IStarship>(
        process.env.API_BASE_URL,
        'starships',
        page,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getStarshipByName(name: string): Promise<IStarship> {
    try {
      return this.httpService.getEntityByName<IStarship>(
        process.env.API_BASE_URL,
        'starships',
        name,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
