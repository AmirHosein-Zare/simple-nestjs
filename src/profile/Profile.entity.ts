import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import User from '../user/User.entity';

@Entity()
export default class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => User, (user)=>user.profile)
    user: User;
}