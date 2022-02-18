import { 
  Entity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn,
  Column 
} from 'typeorm';

@Entity()
export default class users {

    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      email: string;

    @Column()
      password: string;

    @Column()
      name: string;

    @Column()
      nickname: string;
    
    @Column()
      gender: string;

    @Column()
      image: string;
    
    @CreateDateColumn()
    readonly created_at: Date;
}