import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PhotoModule } from './photo/photo.module';
import ormConfig from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load: [ormConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
    }),
    EventModule,
    UserModule,
    ProfileModule,
    PhotoModule
],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
