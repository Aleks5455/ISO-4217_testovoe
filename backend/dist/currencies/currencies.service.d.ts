import { Repository } from 'typeorm';
import { Currency } from './entities/currency.entity';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
export declare class CurrenciesService {
    private currenciesRepository;
    constructor(currenciesRepository: Repository<Currency>);
    create(createCurrencyDto: CreateCurrencyDto): Promise<Currency>;
    findAll(): Promise<Currency[]>;
    findOne(id: number): Promise<Currency>;
    update(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<Currency>;
    remove(id: number): Promise<void>;
}
