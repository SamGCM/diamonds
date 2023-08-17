import {IsString, IsNotEmpty, IsEmail, Length} from "class-validator"

export class SignedDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    jwtToken: string;
}