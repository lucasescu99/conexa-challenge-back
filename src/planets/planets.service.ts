import { Injectable } from '@nestjs/common';
import { IPlanet } from 'src/interfaces/planet.interface';
import { ErrorManager } from 'src/utils/errorHandler';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { HttpCustomService } from 'src/providers/http/http.service';

@Injectable()
export class PlanetsService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getPlanets(page: number): Promise<IDefaultResponse<IPlanet>> {
    try {
      return this.httpService.getAll<IPlanet>(
        process.env.API_BASE_URL,
        'planets',
        page,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getPlanetByName(name: string): Promise<IPlanet> {
    try {
      return this.httpService.getEntityByName<IPlanet>(
        process.env.API_BASE_URL,
        'planets',
        name,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
