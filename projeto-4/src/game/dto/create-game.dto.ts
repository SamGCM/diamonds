import { ApiProperty } from "@nestjs/swagger"
import { Consoles } from "../model/game.model"
import { IsArray, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class CreateGameDto {
    @ApiProperty({description: "Game's name"})
    @IsNotEmpty()
    @IsString()
    nome: string

    @ApiProperty({description: "Game's description"})
    @IsNotEmpty()
    @IsString()
    descricao: string

    @ApiProperty({description: "Game's release, date YYYY/MM/DD"})
    @IsNotEmpty()
    @IsDateString()
    dataLancamento: string

    @ApiProperty({description: "Game's website link"})
    @IsNotEmpty()
    @IsString()
    website: string

    @ApiProperty({description: "Game's development company"})
    @IsNotEmpty()
    @IsString()
    desenvolvedor: string

    @ApiProperty({description: "Game's genre"})
    @IsNotEmpty()
    @IsString()
    genero: string

    @ApiProperty({description: "Game's image cover url"})
    @IsNotEmpty()
    @IsString()
    urlCapa: string

    @ApiProperty({description: "Game's consoles"})
    @IsNotEmpty()
    @IsArray()
    consoles: Consoles[]
}
