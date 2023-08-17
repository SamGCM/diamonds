import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateDeveloperDto {
    @ApiProperty({description: "Developer's name"})
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({description: "Developer's founding at, YYYY/MM/DD"})
    @IsString()
    @IsNotEmpty()
    @IsDateString()
    dataFundacao: string;

    @ApiProperty({description: "Developer's website link"})
    @IsString()
    @IsNotEmpty()
    website: string;

    @ApiProperty({description: "Developer's headquarters"})
    @IsString()
    @IsNotEmpty()
    sede: string;
}
