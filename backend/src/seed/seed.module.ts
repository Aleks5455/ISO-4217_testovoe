import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { Country } from '../countries/entities/country.entity';
import { Currency } from '../currencies/entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Currency])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
