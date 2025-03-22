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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("./entities/country.entity");
const currency_entity_1 = require("../currencies/entities/currency.entity");
let CountriesService = class CountriesService {
    countriesRepository;
    currenciesRepository;
    constructor(countriesRepository, currenciesRepository) {
        this.countriesRepository = countriesRepository;
        this.currenciesRepository = currenciesRepository;
    }
    async create(createCountryDto) {
        const { name, currencyIds } = createCountryDto;
        const currencies = await this.currenciesRepository.findByIds(currencyIds);
        const country = this.countriesRepository.create({
            name,
            currencies,
        });
        return this.countriesRepository.save(country);
    }
    async findAll() {
        return this.countriesRepository.find({
            relations: ['currencies'],
        });
    }
    async findOne(id) {
        const country = await this.countriesRepository.findOne({
            where: { id },
            relations: ['currencies'],
        });
        if (!country) {
            throw new common_1.NotFoundException(`Country with ID ${id} not found`);
        }
        return country;
    }
    async update(id, updateCountryDto) {
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
    async remove(id) {
        const result = await this.countriesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Country with ID ${id} not found`);
        }
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __param(1, (0, typeorm_1.InjectRepository)(currency_entity_1.Currency)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CountriesService);
//# sourceMappingURL=countries.service.js.map