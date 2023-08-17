import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseGameDto } from './dto/response-game.dto';
import { QueryGameDto } from './dto/query-game.dto';

@ApiTags('Game')
@ApiBearerAuth('jwt')
@UseGuards(AuthGuard('jwt'))
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @ApiOkResponse({
    description: 'Create a game',
    type: ResponseGameDto,
    isArray: false
  })
  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @ApiOkResponse({
    description: 'List and filter games',
    type: ResponseGameDto,
    isArray: true
  })
  @ApiQuery({type: QueryGameDto})
  @Get()
  find(@Req() request: Request) {
    return this.gameService.find(request);
  }

  @ApiOkResponse({
    description: 'Get game by id',
    type: ResponseGameDto,
    isArray: false
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @ApiOkResponse({
    description: 'Update game by id',
    type: ResponseGameDto,
    isArray: false
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @ApiOkResponse({
    description: 'Delete game by id',
    type: ResponseGameDto,
    isArray: false
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
