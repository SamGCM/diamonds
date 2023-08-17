import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeveloperSchema } from './schema/developer.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Developer",
        schema: DeveloperSchema
      }
    ]),
    AuthModule,
  ],
  controllers: [DeveloperController],
  providers: [DeveloperService]
})
export class DeveloperModule {}
