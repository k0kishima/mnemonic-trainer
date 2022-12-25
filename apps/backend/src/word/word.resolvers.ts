import { Query, Resolver } from '@nestjs/graphql';
import { Word } from './word.model';

@Resolver((of) => Word)
export class WordsResolver {
  constructor() {}

  @Query(() => [Word], { name: 'words', nullable: true })
  async getWords() {
    return [
      {
        id: 1,
        name: 'foo',
      },
      {
        id: 2,
        name: 'bar',
      },
    ];
  }
}
