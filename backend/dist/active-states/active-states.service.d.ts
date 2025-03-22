import { Repository } from 'typeorm';
import { ActiveState } from './entities/active-state.entity';
import { CreateActiveStateDto } from './dto/create-active-state.dto';
import { UpdateActiveStateDto } from './dto/update-active-state.dto';
export declare class ActiveStatesService {
    private activeStatesRepository;
    constructor(activeStatesRepository: Repository<ActiveState>);
    create(createActiveStateDto: CreateActiveStateDto): Promise<ActiveState>;
    findAll(): Promise<ActiveState[]>;
    findOne(id: number): Promise<ActiveState>;
    findByUserId(userId?: string): Promise<ActiveState>;
    update(id: number, updateActiveStateDto: UpdateActiveStateDto): Promise<ActiveState>;
    updateByUserId(userId: string | undefined, updateActiveStateDto: UpdateActiveStateDto): Promise<ActiveState>;
    remove(id: number): Promise<void>;
}
