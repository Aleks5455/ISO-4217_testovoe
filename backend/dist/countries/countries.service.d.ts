import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Currency } from '../currencies/entities/currency.entity';
export declare class CountriesService {
    private countriesRepository;
    private currenciesRepository;
    constructor(countriesRepository: Repository<Country>, currenciesRepository: Repository<Currency>);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country>;
    remove(id: number): Promise<void>;
}
