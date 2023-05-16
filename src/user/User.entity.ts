import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import Profile from '../profile/Profile.entity';
import Photo from '../photo/Photo.entity';

@Entity()
export default class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(()=>Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile;

    @OneToMany(()=> Photo, (photo)=>photo.user)
    photos: Photo[]
}