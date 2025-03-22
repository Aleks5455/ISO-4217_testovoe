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
exports.ActiveStatesController = void 0;
const common_1 = require("@nestjs/common");
const active_states_service_1 = require("./active-states.service");
const create_active_state_dto_1 = require("./dto/create-active-state.dto");
const update_active_state_dto_1 = require("./dto/update-active-state.dto");
let ActiveStatesController = class ActiveStatesController {
    activeStatesService;
    constructor(activeStatesService) {
        this.activeStatesService = activeStatesService;
    }
    create(createActiveStateDto) {
        return this.activeStatesService.create(createActiveStateDto);
    }
    findAll() {
        return this.activeStatesService.findAll();
    }
    findByUserId(userId = 'default') {
        return this.activeStatesService.findByUserId(userId);
    }
    findOne(id) {
        return this.activeStatesService.findOne(+id);
    }
    update(id, updateActiveStateDto) {
        return this.activeStatesService.update(+id, updateActiveStateDto);
    }
    updateByUserId(userId, updateActiveStateDto) {
        return this.activeStatesService.updateByUserId(userId, updateActiveStateDto);
    }
    remove(id) {
        return this.activeStatesService.remove(+id);
    }
};
exports.ActiveStatesController = ActiveStatesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_active_state_dto_1.CreateActiveStateDto]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_active_state_dto_1.UpdateActiveStateDto]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_active_state_dto_1.UpdateActiveStateDto]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "updateByUserId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiveStatesController.prototype, "remove", null);
exports.ActiveStatesController = ActiveStatesController = __decorate([
    (0, common_1.Controller)('active-states'),
    __metadata("design:paramtypes", [active_states_service_1.ActiveStatesService])
], ActiveStatesController);
//# sourceMappingURL=active-states.controller.js.map