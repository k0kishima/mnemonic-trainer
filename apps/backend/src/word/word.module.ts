import { Module } from '@nestjs/common';
import { WordsResolver } from './word.resolvers';
import { WordService } from './word.service';
import { PrismaService } from "src/shared/services/prisma.service";

@Module({
  providers: [PrismaService, WordsResolver, WordService],
  exports: [WordService],
})
export class WordModule {}
