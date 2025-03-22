import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ActiveState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'default' })
  userId: string;

  @Column('simple-array')
  activeCountries: string[];

  @Column('simple-array')
  activeCurrencies: string[];
}
