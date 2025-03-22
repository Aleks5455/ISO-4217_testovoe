"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("../countries/entities/country.entity");
const currency_entity_1 = require("../currencies/entities/currency.entity");
let SeedService = class SeedService {
    countriesRepository;
    currenciesRepository;
    constructor(countriesRepository, currenciesRepository) {
        this.countriesRepository = countriesRepository;
        this.currenciesRepository = currenciesRepository;
    }
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
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __param(1, (0, typeorm_1.InjectRepository)(currency_entity_1.Currency)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SeedService);
//# sourceMappingURL=seed.service.js.map