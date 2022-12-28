import { Injectable } from '@nestjs/common';
import { Word, Prisma } from '@prisma/client';
import { PrismaService } from "src/shared/services/prisma.service";

@Injectable()
export class WordService {
  constructor(private prisma: PrismaService) {}

  async findMany(limit = 10): Promise<Word[]> {
    if (limit > 100) {
      // todo: undefined などエラー以外の方法で返す（型システムをちゃんと利用したいため）
      throw new Error('the limit must be specified less than or equal to 100.');
    }

    return this.prisma.word.findMany({ take: limit });
  }
}
