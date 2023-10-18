import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  imports: [ProvidersModule],
  controllers: [FilmsController],
  providers: [FilmsService, HttpCustomService],
})
export class FilmsModule {}
