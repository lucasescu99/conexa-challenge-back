import { Injectable } from '@nestjs/common';
import { IPeople } from 'src/interfaces/people.interface';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { HttpCustomService } from 'src/providers/http/http.service';
import { ErrorManager } from 'src/utils/errorHandler';

@Injectable()
export class PeopleService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getPeople(page: number): Promise<IDefaultResponse<IPeople>> {
    try {
      return this.httpService.getAll<IPeople>(
        process.env.API_BASE_URL,
        'people',
        page,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getPersonByName(name: string): Promise<IPeople> {
    try {
      return this.httpService.getEntityByName<IPeople>(
        process.env.API_BASE_URL,
        'people',
        name,
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
