import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from './schema/game.schema';

@Module({
  imports : [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: 'Game',
        schema: GameSchema
      }
    ])
  ],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule {}
