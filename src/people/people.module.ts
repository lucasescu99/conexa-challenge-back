import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  imports: [ProvidersModule],
  controllers: [PeopleController],
  providers: [PeopleService, HttpCustomService],
})
export class PeopleModule {}
