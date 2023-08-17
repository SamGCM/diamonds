import { ApiProperty } from "@nestjs/swagger";
import {IsString, IsNotEmpty, IsEmail, Length} from "class-validator"

export class SingupDto {
    @ApiProperty({description: 'Nome do usuário'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({description: 'Email do usuário'})
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({description: 'Senha do usuário'})
    @IsNotEmpty()
    @IsString()
    @Length(4)
    password: string;
}