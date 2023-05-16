import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository} from 'typeorm';
import Event from './Event.entity';

@Injectable()
export class EventService {

    async getAll(eventRep: Repository<Event>): Promise<Event[]>{
        const events: Event[] = await await eventRep.find();

        if (!events) {
            throw new NotFoundException();
        }

        return events;
    }

    async findById(eventRep: Repository<Event>, id: number): Promise<Event>{
        const event: Event | null = await eventRep.findOneBy({id: id});

        if (!event) {
            throw new NotFoundException();
        }

        return event;
    }
}
