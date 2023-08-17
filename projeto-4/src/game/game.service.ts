import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Model } from 'mongoose';
import { Game } from './model/game.model';
import { throwIsNotFound } from 'src/utils/throwIsNotFound';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';

@Injectable()
export class GameService {
  constructor(
      @InjectModel('Game')
      private readonly gameModel: Model<Game>
    ){}
  public async create(createGameDto: CreateGameDto) {
    const game = new this.gameModel(createGameDto);

    return game.save();
  }

  public async find(request: Request): Promise<Game[]> {

    const query = this.gameModel.find();

    if(request.query.descricao) {
      query.find({descricao: request.query.descricao});
    }

    if(request.query.nome) {
      query.find({nome: request.query.nome});
    }

    if(request.query.dataLancamento) {
      query.find({dataLancamento: request.query.dataLancamento});
    }

    if(request.query.website) {
      query.find({website: request.query.website});
    }

    if(request.query.desenvolvedor) {
      query.find({desenvolvedor: request.query.desenvolvedor});
    }

    if(request.query.genero) {
      query.find({genero: request.query.genero});
    }

    if(request.query.limit) {
      query.find().limit(parseInt(request.query.limit as string));
    }

    if(request.query.sort) {
      query.find().sort(request.query.sort);
    }

    if(request.query.page) {
      const limit = request.query.limit ? parseInt(request.query.limit as string) : 10
      const page = parseInt(request.query.page as string)
      const skip = page * limit

      query.find()
        .limit(limit)
        .skip(skip);
    }

    query.getFilter()

    const result = await query.exec();

    return result;
  }

  public async findOne(id: string) {
    const filter = {
      "_id": id
    }
    const game = await this.gameModel.findOne(filter);

    throwIsNotFound(game)

    return game;
  }

  public async update(id: string, updateGameDto: UpdateGameDto) {
    const filter = {
      "_id": id
    }
    
    const game = await this.gameModel.findByIdAndUpdate(
      filter, 
      updateGameDto,
      {
        new: true
      }
    )

    throwIsNotFound(game)

    return game;
  }

  public async remove(id: string) {
    const filter = {
      "_id": id
    }
    const game = await this.gameModel.findOneAndDelete(
      filter
    )

    return game;
  }
}
