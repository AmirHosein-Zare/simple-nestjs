import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Event from './Event.entity';
import {Repository} from 'typeorm';
import CreateEventDTO from './createEvent.dto';
import { JoiValidationPipe } from './JoiValidationPipe';
import {validateEvent} from './event.validate';
import {EventService} from './event.service';

@Controller('event')
export class EventController {
    constructor(
        @InjectRepository(Event)
        private readonly eventRep: Repository<Event>,
        private eventService: EventService
    ){}

    @Get()
    async getAll(): Promise<Event[]>{
        return await this.eventService.getAll(this.eventRep);
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Event>{
        return await this.eventService.findById(this.eventRep, id);
    }

    @Post()
    @UsePipes(new JoiValidationPipe(validateEvent))
    async create(@Body() input: CreateEventDTO):Promise<Event>{
        return await this.eventRep.save({...input});
    }

    @Patch(':id')
    @UsePipes(new JoiValidationPipe(validateEvent))
    async edit(@Body() input: CreateEventDTO, @Param('id', ParseIntPipe) id: number): Promise<Event>{
        return await this.eventRep.save({
            ...(await this.eventService.findById(this.eventRep, id)),
            ...input
        });
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<Event>{
        return await this.eventRep.remove(await this.eventService.findById(this.eventRep, id));
    }
}
