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
exports.ActiveStatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const active_state_entity_1 = require("./entities/active-state.entity");
let ActiveStatesService = class ActiveStatesService {
    activeStatesRepository;
    constructor(activeStatesRepository) {
        this.activeStatesRepository = activeStatesRepository;
    }
    async create(createActiveStateDto) {
        const activeState = this.activeStatesRepository.create({
            userId: createActiveStateDto.userId || 'default',
            activeCountries: createActiveStateDto.activeCountries,
            activeCurrencies: createActiveStateDto.activeCurrencies,
        });
        return this.activeStatesRepository.save(activeState);
    }
    async findAll() {
        return this.activeStatesRepository.find();
    }
    async findOne(id) {
        const activeState = await this.activeStatesRepository.findOne({
            where: { id },
        });
        if (!activeState) {
            throw new common_1.NotFoundException(`ActiveState with ID ${id} not found`);
        }
        return activeState;
    }
    async findByUserId(userId = 'default') {
        const activeState = await this.activeStatesRepository.findOne({
            where: { userId },
        });
        if (!activeState) {
            return this.create({
                userId,
                activeCountries: [],
                activeCurrencies: [],
            });
        }
        return activeState;
    }
    async update(id, updateActiveStateDto) {
        const activeState = await this.findOne(id);
        if (updateActiveStateDto.activeCountries) {
            activeState.activeCountries = updateActiveStateDto.activeCountries;
        }
        if (updateActiveStateDto.activeCurrencies) {
            activeState.activeCurrencies = updateActiveStateDto.activeCurrencies;
        }
        return this.activeStatesRepository.save(activeState);
    }
    async updateByUserId(userId = 'default', updateActiveStateDto) {
        let activeState = await this.activeStatesRepository.findOne({
            where: { userId },
        });
        if (!activeState) {
            activeState = await this.create({
                userId,
                activeCountries: updateActiveStateDto.activeCountries || [],
                activeCurrencies: updateActiveStateDto.activeCurrencies || [],
            });
        }
        else {
            if (updateActiveStateDto.activeCountries !== undefined) {
                activeState.activeCountries = updateActiveStateDto.activeCountries;
            }
            if (updateActiveStateDto.activeCurrencies !== undefined) {
                activeState.activeCurrencies = updateActiveStateDto.activeCurrencies;
            }
            activeState = await this.activeStatesRepository.save(activeState);
        }
        return activeState;
    }
    async remove(id) {
        const result = await this.activeStatesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`ActiveState with ID ${id} not found`);
        }
    }
};
exports.ActiveStatesService = ActiveStatesService;
exports.ActiveStatesService = ActiveStatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(active_state_entity_1.ActiveState)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActiveStatesService);
//# sourceMappingURL=active-states.service.js.map