import { Module } from '@nestjs/common';
import { ConsoleService } from './console.service';
import { ConsoleController } from './console.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsoleSchema } from './schema/console.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: 'Console',
        schema: ConsoleSchema
      }
    ])
  ],
  controllers: [ConsoleController],
  providers: [ConsoleService]
})
export class ConsoleModule {}
