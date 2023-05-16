import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';

@Module({
  imports: [EventModule],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
