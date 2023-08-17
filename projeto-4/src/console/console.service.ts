import { Injectable } from '@nestjs/common';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';
import { Console } from './model/console.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { throwIsNotFound } from 'src/utils/throwIsNotFound';
import { Request } from 'express';

@Injectable()
export class ConsoleService {
  constructor(
    @InjectModel('Console')
    private readonly consoleModel: Model<Console>
  ){}
  public async create(createConsoleDto: CreateConsoleDto) {
    const console = new this.consoleModel(createConsoleDto);

    return console.save();
  }

  public async find(request: Request): Promise<Console[]> {

    const query = this.consoleModel.find();

    if(request.query.codigo) {
      query.find({codigo: request.query.codigo});
    }

    if(request.query.nome) {
      query.find({nome: request.query.nome});
    }

    if(request.query.dataLancamento) {
      query.find({dataLancamento: request.query.dataLancamento});
    }

    if(request.query.empresa) {
      query.find({empresa: request.query.empresa});
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
    const console = await this.consoleModel.findOne(filter);

    throwIsNotFound(console)

    return console;
  }

  public async update(id: string, updateConsoleDto: UpdateConsoleDto) {
    const filter = {
      "_id": id
    }
    
    const console = await this.consoleModel.findByIdAndUpdate(
      filter, 
      updateConsoleDto,
      {
        new: true
      }
    )

    throwIsNotFound(console)

    return console;
  }

  public async remove(id: string) {
    const filter = {
      "_id": id
    }
    const console = await this.consoleModel.findOneAndDelete(
      filter
    )

    return console;
  }
}
