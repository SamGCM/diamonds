import { PartialType } from "@nestjs/swagger";
import { CreateConsoleDto } from "./create-console.dto";

export class QueryConsoleDto extends PartialType(CreateConsoleDto) {
    limit?: string;
    page?: string;
    sort?: string;
}