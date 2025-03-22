import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ActiveStatesService } from './active-states.service';
import { CreateActiveStateDto } from './dto/create-active-state.dto';
import { UpdateActiveStateDto } from './dto/update-active-state.dto';

@Controller('active-states')
export class ActiveStatesController {
  constructor(private readonly activeStatesService: ActiveStatesService) {}

  @Post()
  create(@Body() createActiveStateDto: CreateActiveStateDto) {
    return this.activeStatesService.create(createActiveStateDto);
  }

  @Get()
  findAll() {
    return this.activeStatesService.findAll();
  }

  @Get('user')
  findByUserId(@Query('userId') userId: string = 'default') {
    return this.activeStatesService.findByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activeStatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActiveStateDto: UpdateActiveStateDto) {
    return this.activeStatesService.update(+id, updateActiveStateDto);
  }

  @Patch('user/:userId')
  updateByUserId(
    @Param('userId') userId: string,
    @Body() updateActiveStateDto: UpdateActiveStateDto
  ) {
    return this.activeStatesService.updateByUserId(userId, updateActiveStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activeStatesService.remove(+id);
  }
}
