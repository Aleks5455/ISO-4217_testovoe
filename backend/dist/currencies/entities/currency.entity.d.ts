import { Country } from '../../countries/entities/country.entity';
export declare class Currency {
    id: number;
    code: string;
    name: string;
    countries: Country[];
}
