import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { PlatformType } from '../account/account.entity';

export default class SourceEntity implements Prisma.SourceUncheckedCreateInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  platform_id?: string;

  @ApiProperty()
  platform_username?: string;

  @ApiProperty()
  owner_name?: string;

  @ApiProperty()
  platform?: PlatformType;

  @ApiProperty()
  url?: string;

  @ApiProperty({ type: () => String, isArray: true })
  languages?: string[];

  @ApiProperty()
  verified?: boolean;

  @ApiProperty()
  edge_case?: boolean;

  @ApiProperty()
  labelled?: boolean;

  @ApiProperty()
  availability?: string;

  @ApiProperty()
  n_posts?: number;

  @ApiProperty()
  likes_median?: number;

  @ApiProperty()
  shares_median?: number;

  @ApiProperty()
  comments_median?: number;

  @ApiProperty()
  date_first?: Date;

  @ApiProperty()
  date_last?: Date;

  @ApiProperty()
  engagement_median?: number;

  @ApiProperty()
  outlinks_percentage?: number;

  @ApiProperty()
  outlink_top?: string;

  @ApiProperty()
  perspective_n?: number;

  @ApiProperty()
  severe_toxicity_n?: number;

  @ApiProperty()
  identity_attack_n?: number;

  @ApiProperty()
  threat_n?: number;

  @ApiProperty()
  severe_toxicity_p?: number;

  @ApiProperty()
  identity_attack_p?: number;

  @ApiProperty()
  threat_p?: number;

  @ApiProperty()
  toxic_likes_median?: number;

  @ApiProperty()
  toxic_shares_median?: number;

  @ApiProperty()
  toxic_comments_median?: number;

  @ApiProperty()
  toxic_engagement_median?: number;

  @ApiProperty()
  subscribers_start?: number;

  @ApiProperty()
  subscribers_end?: number;

  @ApiProperty()
  subscriber_growth_n?: number;

  @ApiProperty()
  subscriber_growth_p?: number;

  @ApiProperty()
  exposure_n?: number;

  @ApiProperty()
  exposure_median?: number;

  @ApiProperty()
  toxic_exposure?: number;

  @ApiProperty()
  toxic_n?: number;

  @ApiProperty()
  added_at?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  subscribers_start_date?: Date;

  @ApiProperty()
  subscribers_end_date?: Date;
}
