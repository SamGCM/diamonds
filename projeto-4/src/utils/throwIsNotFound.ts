import { NotFoundException } from '@nestjs/common';
export function throwIsNotFound<T>(document: T) {
    if(!document) {
        throw new NotFoundException("not found")
    }
}