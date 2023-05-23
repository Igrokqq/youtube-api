import { Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import AccountEntity, { PlatformType } from './account.entity';
import { Cron, CronExpression } from '@nestjs/schedule';
import YouTubeService from 'src/common/modules/google-api/services/youtube.service';
import { google } from 'googleapis';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly youtubeService: YouTubeService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async updateYouTubeAccounts() {
    const sources = await this.prisma.source.findMany({
      where: { platform: PlatformType.YouTube },
    });

    await this.prisma.$transaction((prisma) => {
      return Promise.all(
        sources.map(async (source) => {
          const posts = await this.youtubeService.getPosts({
            channelId: source.platform_id,
          });

          await Promise.all(
            posts.map((post) => {
              return this.prisma.post.updateMany({
                where: { id: Number(post.postId) },
                data: { text_original: post.title },
              });
            }),
          );

          return prisma.account.updateMany({
            where: { internalID: source.id },
            data: {
              // TODO: add fields needed to be updated
              username: source.platform_username,
              is_verified: source.verified,
            },
          });
        }),
      );
    });
  }

  async createAccount(
    data: Prisma.AccountUncheckedCreateInput,
  ): Promise<AccountEntity> {
    const account = await this.prisma.account.create({ data });

    return account as AccountEntity;
  }

  async getAccountById(id: number): Promise<AccountEntity | null> {
    const account = await this.prisma.account.findUnique({
      where: { internalID: id },
    });

    return account as AccountEntity;
  }

  async getAllAccounts(): Promise<AccountEntity[]> {
    const accounts = await this.prisma.account.findMany();

    return accounts as AccountEntity[];
  }

  async updateAccount(
    id: number,
    data: Prisma.AccountUncheckedUpdateInput,
  ): Promise<AccountEntity | null> {
    const affectedAccount = await this.prisma.account.update({
      where: { internalID: id },
      data,
    });

    return affectedAccount as AccountEntity;
  }

  async deleteAccount(id: number): Promise<AccountEntity | null> {
    const affectedAccount = await this.prisma.account.delete({
      where: { internalID: id },
    });

    return affectedAccount as AccountEntity;
  }
}
