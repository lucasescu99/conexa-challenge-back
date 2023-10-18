import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IDefaultResponse } from 'src/interfaces/response.interface';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  public async getAll<T>(
    baseUrl: string,
    entity: string,
    page: number,
  ): Promise<IDefaultResponse<T>> {
    const response = await firstValueFrom(
      this.httpService.get<IDefaultResponse<T>>(
        `${baseUrl}/${entity}?page=${page}`,
      ),
    );
    return response.data;
  }

  public async getEntityByName<T>(
    baseUrl: string,
    entity: string,
    name: string,
  ): Promise<T> {
    const response = await firstValueFrom(
      this.httpService.get<T>(`${baseUrl}/${entity}/?search=${name}`),
    );
    return response.data;
  }
}
