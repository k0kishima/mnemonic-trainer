import { Module } from '@nestjs/common';
import { WordsResolver } from './word.resolvers';

@Module({
  providers: [WordsResolver],
})
export class WordModule {}
