import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActiveStatesService } from './active-states.service';
import { ActiveStatesController } from './active-states.controller';
import { ActiveState } from './entities/active-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActiveState])],
  controllers: [ActiveStatesController],
  providers: [ActiveStatesService],
  exports: [ActiveStatesService],
})
export class ActiveStatesModule {}
