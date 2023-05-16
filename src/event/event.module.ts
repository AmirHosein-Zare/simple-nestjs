import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import Event from './Event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event])
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
