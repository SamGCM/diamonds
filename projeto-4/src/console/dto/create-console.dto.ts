import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateConsoleDto {
    @ApiProperty({description: "Console's code"})
    @IsNumber()
    @IsNotEmpty()
    codigo: number

    @ApiProperty({description: "Console's name"})
    @IsString()
    @IsNotEmpty()
    nome: string
    
    @ApiProperty({description: "Console's release date, YYYY/MM/DD"})
    @IsDateString()
    @IsNotEmpty()
    dataLancamento: string
    
    @ApiProperty({description: "Console's company"})
    @IsString()
    @IsNotEmpty()
    empresa: string
}
