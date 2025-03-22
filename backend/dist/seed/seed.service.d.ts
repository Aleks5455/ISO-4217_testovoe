import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Country } from '../countries/entities/country.entity';
import { Currency } from '../currencies/entities/currency.entity';
export declare class SeedService implements OnModuleInit {
    private countriesRepository;
    private currenciesRepository;
    constructor(countriesRepository: Repository<Country>, currenciesRepository: Repository<Currency>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
}
