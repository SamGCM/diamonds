import { SingupDto } from './dto/signup.dto';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcrypt"
import { User } from './models/users.model';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { SinginDto } from './dto/signin.dto';
import { SignedDto } from './dto/signed.dto';
import { throwIsNotFound } from 'src/utils/throwIsNotFound';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>,
        private readonly authService: AuthService,
    ) {}

    public async signup(singupDto: SingupDto): Promise<User> {
        const user = new this.userModel(singupDto);
        
        const alreadyExist = await this.userModel.findOne({email: singupDto.email})

        if(alreadyExist) {
            throw new ConflictException('Email already used')
        }

        return user.save()
    }

    public async signin(signinDto: SinginDto): Promise<SignedDto> {
        const user = await this.findByEmail(signinDto.email);
        const match = await this.checkPassword(signinDto.password, user);

        if(!match) {
            throw new NotFoundException('invalid credentials')
        }

        const jwtToken = await this.authService.createAccessToken(user._id)

        return {
            name: user.name, 
            jwtToken: jwtToken, 
            email: user.email
        }

    }

    public async findAll(): Promise<SinginDto[]> {
        return this.userModel.find().select(["-password", "-__v"]);
    }

    public async update(id: string, updateUserDto: UpdateUserDto) {
        const filter = {
          "_id": id
        }
        
        const user = await this.userModel.findByIdAndUpdate(
          filter, 
          updateUserDto,
          {
            new: true
          }
        )
    
        throwIsNotFound(user)
    
        return user;
      }
    
      public async remove(id: string) {
        const filter = {
          "_id": id
        }
        const user = await this.userModel.findOneAndDelete(
          filter
        )
    
        return user;
      }



    private async findByEmail(email: string) {
        const user = await this.userModel.findOne({email})
        if(!user) {
            throw new NotFoundException('email not found')
        }

        return user;
    }

    private async checkPassword(password: string, user: User): Promise<boolean> {
        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            throw new NotFoundException('password not found')
        }

        return match;
    }
}


