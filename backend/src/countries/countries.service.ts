import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Currency } from '../currencies/entities/currency.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
    @InjectRepository(Currency)
    private currenciesRepository: Repository<Currency>
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const { name, currencyIds } = createCountryDto;

    const currencies = await this.currenciesRepository.findByIds(currencyIds);

    const country = this.countriesRepository.create({
      name,
      currencies,
    });

    return this.countriesRepository.save(country);
  }

  async findAll(): Promise<Country[]> {
    return this.countriesRepository.find({
      relations: ['currencies'],
    });
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countriesRepository.findOne({
      where: { id },
      relations: ['currencies'],
    });

    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }

    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country> {
    const country = await this.findOne(id);

    if (updateCountryDto.name) {
      country.name = updateCountryDto.name;
    }

    if (updateCountryDto.currencyIds) {
      const currencies = await this.currenciesRepository.findByIds(updateCountryDto.currencyIds);
      country.currencies = currencies;
    }

    return this.countriesRepository.save(country);
  }

  async remove(id: number): Promise<void> {
    const result = await this.countriesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
  }
}
