import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActiveState } from './entities/active-state.entity';
import { CreateActiveStateDto } from './dto/create-active-state.dto';
import { UpdateActiveStateDto } from './dto/update-active-state.dto';

@Injectable()
export class ActiveStatesService {
  constructor(
    @InjectRepository(ActiveState)
    private activeStatesRepository: Repository<ActiveState>
  ) {}

  async create(createActiveStateDto: CreateActiveStateDto): Promise<ActiveState> {
    const activeState = this.activeStatesRepository.create({
      userId: createActiveStateDto.userId || 'default',
      activeCountries: createActiveStateDto.activeCountries,
      activeCurrencies: createActiveStateDto.activeCurrencies,
    });

    return this.activeStatesRepository.save(activeState);
  }

  async findAll(): Promise<ActiveState[]> {
    return this.activeStatesRepository.find();
  }

  async findOne(id: number): Promise<ActiveState> {
    const activeState = await this.activeStatesRepository.findOne({
      where: { id },
    });

    if (!activeState) {
      throw new NotFoundException(`ActiveState with ID ${id} not found`);
    }

    return activeState;
  }

  async findByUserId(userId: string = 'default'): Promise<ActiveState> {
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

  async update(id: number, updateActiveStateDto: UpdateActiveStateDto): Promise<ActiveState> {
    const activeState = await this.findOne(id);

    if (updateActiveStateDto.activeCountries) {
      activeState.activeCountries = updateActiveStateDto.activeCountries;
    }

    if (updateActiveStateDto.activeCurrencies) {
      activeState.activeCurrencies = updateActiveStateDto.activeCurrencies;
    }

    return this.activeStatesRepository.save(activeState);
  }

  async updateByUserId(
    userId: string = 'default',
    updateActiveStateDto: UpdateActiveStateDto
  ): Promise<ActiveState> {
    let activeState = await this.activeStatesRepository.findOne({
      where: { userId },
    });

    if (!activeState) {
      activeState = await this.create({
        userId,
        activeCountries: updateActiveStateDto.activeCountries || [],
        activeCurrencies: updateActiveStateDto.activeCurrencies || [],
      });
    } else {
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

  async remove(id: number): Promise<void> {
    const result = await this.activeStatesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`ActiveState with ID ${id} not found`);
    }
  }
}
