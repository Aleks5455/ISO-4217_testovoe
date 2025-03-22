"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveStatesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const active_states_service_1 = require("./active-states.service");
const active_states_controller_1 = require("./active-states.controller");
const active_state_entity_1 = require("./entities/active-state.entity");
let ActiveStatesModule = class ActiveStatesModule {
};
exports.ActiveStatesModule = ActiveStatesModule;
exports.ActiveStatesModule = ActiveStatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([active_state_entity_1.ActiveState])],
        controllers: [active_states_controller_1.ActiveStatesController],
        providers: [active_states_service_1.ActiveStatesService],
        exports: [active_states_service_1.ActiveStatesService],
    })
], ActiveStatesModule);
//# sourceMappingURL=active-states.module.js.map