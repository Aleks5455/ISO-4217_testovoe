import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Country } from '../../countries/entities/country.entity';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @ManyToMany(() => Country, country => country.currencies)
  countries: Country[];
}
