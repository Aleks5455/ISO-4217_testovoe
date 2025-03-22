import { ActiveStatesService } from './active-states.service';
import { CreateActiveStateDto } from './dto/create-active-state.dto';
import { UpdateActiveStateDto } from './dto/update-active-state.dto';
export declare class ActiveStatesController {
    private readonly activeStatesService;
    constructor(activeStatesService: ActiveStatesService);
    create(createActiveStateDto: CreateActiveStateDto): Promise<import("./entities/active-state.entity").ActiveState>;
    findAll(): Promise<import("./entities/active-state.entity").ActiveState[]>;
    findByUserId(userId?: string): Promise<import("./entities/active-state.entity").ActiveState>;
    findOne(id: string): Promise<import("./entities/active-state.entity").ActiveState>;
    update(id: string, updateActiveStateDto: UpdateActiveStateDto): Promise<import("./entities/active-state.entity").ActiveState>;
    updateByUserId(userId: string, updateActiveStateDto: UpdateActiveStateDto): Promise<import("./entities/active-state.entity").ActiveState>;
    remove(id: string): Promise<void>;
}
