import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './model/developer.model';
import { Model } from 'mongoose';
import { throwIsNotFound } from 'src/utils/throwIsNotFound';
import { Request } from 'express';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectModel('Developer')
    private readonly developerModel: Model<Developer>,
  ){}

  public async create(createDeveloperDto: CreateDeveloperDto): Promise<Developer> {
    const developer = new this.developerModel(createDeveloperDto);

    return developer.save();
  }

  public async findOne(id: string): Promise<Developer> {
    const filter = {
      "_id": id
    }
    const developer = await this.developerModel.findOne(filter);

    throwIsNotFound(developer)

    return developer;
  }

  public async find(request: Request): Promise<Developer[]> {

    const query = this.developerModel.find();

    if(request.query.sede) {
      query.find({sede: request.query.sede});
    }

    if(request.query.nome) {
      query.find({nome: request.query.nome});
    }

    if(request.query.dataFundacao) {
      query.find({dataFundacao: request.query.dataFundacao});
    }

    if(request.query.website) {
      query.find({website: request.query.website});
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

  public async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    
    const filter = {
      "_id": id
    }
    
    const developer = await this.developerModel.findByIdAndUpdate(
      filter, 
      updateDeveloperDto,
      {
        new: true
      }
    )

    throwIsNotFound(developer)

    return developer;
  }

  public async remove(id: string) {
    const filter = {
      "_id": id
    }
    const developer = await this.developerModel.findOneAndDelete(
      filter
    )

    return developer;
  }
}
