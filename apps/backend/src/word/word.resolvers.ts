import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { Word } from './word.model';
import { WordService } from './word.service';

@Resolver((of) => Word)
export class WordsResolver {
  constructor(
    private readonly wordService: WordService,
  ) {}

  @Query(() => [Word], { name: 'words', nullable: true })
  async getWords(@Args('limit', { type: () => Int }) limit: number) {
    return this.wordService.findMany(limit);
  }
}
