import { PartialType } from "@nestjs/swagger";
import { CreateConsoleDto } from "./create-console.dto";

export class ResponseConsoleDto extends PartialType(CreateConsoleDto) {
    _id: string
}