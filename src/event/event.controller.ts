import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Event from './Event.entity';
import {Repository} from 'typeorm';
import CreateEventDTO from './createEvent.dto';

@Controller('event')
export class EventController {
    constructor(
        @InjectRepository(Event)
        private readonly eventRep: Repository<Event>
    ){}

    @Get()
    async getAll(): Promise<Event[]>{
        const events: Event[] = await await this.eventRep.find();

        if (!events) {
            throw new NotFoundException();
        }

        return events;
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Event>{
        const event: Event | null = await this.eventRep.findOneBy({id: id});

        if (!event) {
            throw new NotFoundException();
        }

        return event;
    }

    @Post()
    async create(@Body() input: CreateEventDTO):Promise<Event>{
        return await this.eventRep.save({...input});
    }
}
