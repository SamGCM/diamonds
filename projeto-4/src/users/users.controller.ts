import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { SingupDto } from './dto/signup.dto';
import { User } from './models/users.model';
import { SinginDto } from './dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse, ApiForbiddenResponse, ApiOkResponse, ApiUnauthorizedResponse, ApiTags, ApiBearerAuth} from "@nestjs/swagger"
import { SignedDto } from './dto/signed.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @ApiOkResponse({
        description: 'Create user',
        type: SingupDto,
        isArray: false
    })
    @ApiResponse({status: 409, description: 'Email already used'})
    @Post('signup')
    public async signup(@Body() singupDto: SingupDto): Promise<User> {
        return this.usersService.signup(singupDto);
    }

    @ApiOkResponse({
        description: 'Authenticate user and get token jwt',
        type: SignedDto,
        isArray: false
    })
    @ApiResponse({status: 401, description: 'Invalid credentials'})
    @Post('signin')
    public async signin(@Body() signinDto: SinginDto): Promise<SignedDto> {
        return this.usersService.signin(signinDto);
    }

    @ApiBearerAuth('jwt')
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiOkResponse({
        description: 'List users',
        type: SinginDto,
        isArray: true
    })
    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<SinginDto[]> {
        return this.usersService.findAll();
    }

    @ApiOkResponse({
        description: 'Update user by id',
        type: SinginDto,
        isArray: false
      })
      @Patch(':id')
      update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
      }
    
      @ApiOkResponse({
        description: 'Delete user by id',
        type: SinginDto,
        isArray: false
      })
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.usersService.remove(id);
      }
}
