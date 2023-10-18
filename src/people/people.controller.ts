import { Controller, Get, Param, Query } from '@nestjs/common';
import { PeopleService } from './people.service';
import { IPeople } from 'src/interfaces/people.interface';
import { IDefaultResponse } from 'src/interfaces/response.interface';
import { INITIAL_PAGE } from 'src/constants/initialValues';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  async getPeople(
    @Query('page') page: string,
  ): Promise<IDefaultResponse<IPeople>> {
    return this.peopleService.getPeople(Number(page || INITIAL_PAGE));
  }

  @Get(':name')
  async getPersonByName(@Param('name') name: string): Promise<IPeople> {
    return this.peopleService.getPersonByName(name);
  }
}
