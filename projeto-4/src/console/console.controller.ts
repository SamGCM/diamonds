import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ConsoleService } from './console.service';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Console } from './model/console.model';
import { ResponseConsoleDto } from './dto/response-console.dto';
import { QueryConsoleDto } from './dto/query-console.dto';

@ApiTags('Console')
@ApiBearerAuth('jwt')
@UseGuards(AuthGuard('jwt'))
@Controller('console')
export class ConsoleController {
  constructor(private readonly consoleService: ConsoleService) {}

  @ApiOkResponse({
    description: 'Create console',
    type: ResponseConsoleDto,
    isArray: false
  })
  @Post()
  create(@Body() createConsoleDto: CreateConsoleDto) {
    return this.consoleService.create(createConsoleDto);
  }

  @ApiOkResponse({
    description: 'List and filter consoles',
    type: ResponseConsoleDto,
    isArray: true
  })
  @ApiQuery({type: QueryConsoleDto})
  @Get()
  find(@Req() request: Request) {
    return this.consoleService.find(request);
  }

  @ApiOkResponse({
    description: 'Get console by id',
    type: ResponseConsoleDto,
    isArray: false
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consoleService.findOne(id);
  }

  @ApiOkResponse({
    description: 'Update console by id',
    type: ResponseConsoleDto,
    isArray: false
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsoleDto: UpdateConsoleDto) {
    return this.consoleService.update(id, updateConsoleDto);
  }

  @ApiOkResponse({
    description: 'Delete console by id',
    type: ResponseConsoleDto,
    isArray: false
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consoleService.remove(id);
  }
}
