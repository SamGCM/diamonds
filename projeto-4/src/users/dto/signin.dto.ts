import {IsString, IsNotEmpty, IsEmail, Length} from "class-validator"

export class SinginDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(4)
    password: string;
}