import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import Profile from '../profile/Profile.entity';

@Entity()
export default class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(()=>Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile;
}