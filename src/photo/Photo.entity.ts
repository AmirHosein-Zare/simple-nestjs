import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import User from '../user/User.entity';

@Entity()
export default class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, (user)=>user.photos)
    user: User;
}