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
exports.CurrenciesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const currency_entity_1 = require("./entities/currency.entity");
let CurrenciesService = class CurrenciesService {
    currenciesRepository;
    constructor(currenciesRepository) {
        this.currenciesRepository = currenciesRepository;
    }
    async create(createCurrencyDto) {
        const currency = this.currenciesRepository.create(createCurrencyDto);
        return this.currenciesRepository.save(currency);
    }
    async findAll() {
        return this.currenciesRepository.find({
            relations: ['countries'],
        });
    }
    async findOne(id) {
        const currency = await this.currenciesRepository.findOne({
            where: { id },
            relations: ['countries'],
        });
        if (!currency) {
            throw new common_1.NotFoundException(`Currency with ID ${id} not found`);
        }
        return currency;
    }
    async update(id, updateCurrencyDto) {
        const currency = await this.findOne(id);
        if (updateCurrencyDto.code) {
            currency.code = updateCurrencyDto.code;
        }
        if (updateCurrencyDto.name) {
            currency.name = updateCurrencyDto.name;
        }
        return this.currenciesRepository.save(currency);
    }
    async remove(id) {
        const result = await this.currenciesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Currency with ID ${id} not found`);
        }
    }
};
exports.CurrenciesService = CurrenciesService;
exports.CurrenciesService = CurrenciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(currency_entity_1.Currency)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CurrenciesService);
//# sourceMappingURL=currencies.service.js.map