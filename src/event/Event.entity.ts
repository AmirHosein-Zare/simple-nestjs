import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}