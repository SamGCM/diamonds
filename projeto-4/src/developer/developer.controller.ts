import { QueryDeveloperDto } from './dto/query-developer.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Developer } from './entities/developer.entity';

@ApiTags('Developer')
@ApiBearerAuth('jwt')
@UseGuards(AuthGuard('jwt'))
@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @ApiOkResponse({
    description: 'Create developer',
    type: CreateDeveloperDto,
    isArray: false
  })
  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developerService.create(createDeveloperDto);
  }

  @ApiOkResponse({
    description: 'List or Search developer',
    type: Developer,
    isArray: true
  })
  @Get()
  @ApiQuery({type: QueryDeveloperDto})
  find(
      @Req() request: Request
    ) {
    return this.developerService.find(request);
  }

  @ApiOkResponse({
    description: 'Get a developer by id',
    type: Developer,
    isArray: false
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developerService.findOne(id);
  }

  @ApiOkResponse({
    description: 'Update Developer',
    type: Developer,
    isArray: false
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeveloperDto: UpdateDeveloperDto) {
    return this.developerService.update(id, updateDeveloperDto);
  }

  @ApiOkResponse({
    description: 'Delete developer',
    type: Developer,
    isArray: false
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developerService.remove(id);
  }
}
