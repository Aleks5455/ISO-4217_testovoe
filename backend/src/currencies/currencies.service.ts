import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from './entities/currency.entity';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency)
    private currenciesRepository: Repository<Currency>
  ) {}

  async create(createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    const currency = this.currenciesRepository.create(createCurrencyDto);
    return this.currenciesRepository.save(currency);
  }

  async findAll(): Promise<Currency[]> {
    return this.currenciesRepository.find({
      relations: ['countries'],
    });
  }

  async findOne(id: number): Promise<Currency> {
    const currency = await this.currenciesRepository.findOne({
      where: { id },
      relations: ['countries'],
    });

    if (!currency) {
      throw new NotFoundException(`Currency with ID ${id} not found`);
    }

    return currency;
  }

  async update(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<Currency> {
    const currency = await this.findOne(id);

    if (updateCurrencyDto.code) {
      currency.code = updateCurrencyDto.code;
    }

    if (updateCurrencyDto.name) {
      currency.name = updateCurrencyDto.name;
    }

    return this.currenciesRepository.save(currency);
  }

  async remove(id: number): Promise<void> {
    const result = await this.currenciesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Currency with ID ${id} not found`);
    }
  }
}
