import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Currency } from '../../currencies/entities/currency.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Currency, currency => currency.countries, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  currencies: Currency[];
}
