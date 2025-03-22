import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDto: CreateCountryDto): Promise<import("./entities/country.entity").Country>;
    findAll(): Promise<import("./entities/country.entity").Country[]>;
    findOne(id: string): Promise<import("./entities/country.entity").Country>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<import("./entities/country.entity").Country>;
    remove(id: string): Promise<void>;
}
