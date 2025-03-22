import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../countries/entities/country.entity';
import { Currency } from '../currencies/entities/currency.entity';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
    @InjectRepository(Currency)
    private currenciesRepository: Repository<Currency>
  ) {}

  async onModuleInit() {
    const countriesCount = await this.countriesRepository.count();
    const currenciesCount = await this.currenciesRepository.count();

    if (countriesCount === 0 && currenciesCount === 0) {
      await this.seed();
    }
  }

  async seed() {
    console.log('Seeding database...');

    const usd = await this.currenciesRepository.save({
      code: 'USD',
      name: 'US Dollar',
    });

    const eur = await this.currenciesRepository.save({
      code: 'EUR',
      name: 'Euro',
    });

    const gbp = await this.currenciesRepository.save({
      code: 'GBP',
      name: 'Pound Sterling',
    });

    const jpy = await this.currenciesRepository.save({
      code: 'JPY',
      name: 'Japanese Yen',
    });

    const cny = await this.currenciesRepository.save({
      code: 'CNY',
      name: 'Chinese Yuan',
    });

    const chf = await this.currenciesRepository.save({
      code: 'CHF',
      name: 'Swiss Franc',
    });

    const cad = await this.currenciesRepository.save({
      code: 'CAD',
      name: 'Canadian Dollar',
    });

    const aud = await this.currenciesRepository.save({
      code: 'AUD',
      name: 'Australian Dollar',
    });

    const nzd = await this.currenciesRepository.save({
      code: 'NZD',
      name: 'New Zealand Dollar',
    });

    const inr = await this.currenciesRepository.save({
      code: 'INR',
      name: 'Indian Rupee',
    });

    const brl = await this.currenciesRepository.save({
      code: 'BRL',
      name: 'Brazilian Real',
    });

    const rub = await this.currenciesRepository.save({
      code: 'RUB',
      name: 'Russian Ruble',
    });

    const zar = await this.currenciesRepository.save({
      code: 'ZAR',
      name: 'South African Rand',
    });

    const mxn = await this.currenciesRepository.save({
      code: 'MXN',
      name: 'Mexican Peso',
    });

    const sgd = await this.currenciesRepository.save({
      code: 'SGD',
      name: 'Singapore Dollar',
    });

    await this.countriesRepository.save([
      {
        name: 'United States',
        currencies: [usd],
      },
      {
        name: 'European Union',
        currencies: [eur],
      },
      {
        name: 'United Kingdom',
        currencies: [gbp],
      },
      {
        name: 'Japan',
        currencies: [jpy],
      },
      {
        name: 'China',
        currencies: [cny],
      },
      {
        name: 'Switzerland',
        currencies: [chf],
      },
      {
        name: 'Canada',
        currencies: [cad],
      },
      {
        name: 'Australia',
        currencies: [aud],
      },
      {
        name: 'New Zealand',
        currencies: [nzd],
      },
      {
        name: 'India',
        currencies: [inr],
      },
      {
        name: 'Brazil',
        currencies: [brl],
      },
      {
        name: 'Russia',
        currencies: [rub],
      },
      {
        name: 'South Africa',
        currencies: [zar],
      },
      {
        name: 'Mexico',
        currencies: [mxn],
      },
      {
        name: 'Singapore',
        currencies: [sgd],
      },
    ]);

    console.log('Database seeded successfully!');
  }
}
