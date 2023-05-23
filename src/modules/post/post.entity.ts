import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export default class PostEntity implements Prisma.PostUncheckedCreateInput {
  @ApiProperty()
  internalID?: number;

  @ApiProperty()
  character?: string;

  @ApiProperty()
  platform?: string;

  @ApiProperty()
  original_post_author_id?: string;

  @ApiProperty()
  created_time?: Date;

  @ApiProperty()
  type?: string;

  @ApiProperty()
  links?: string[];

  @ApiProperty()
  domains?: string[];

  @ApiProperty()
  text_original?: string;

  @ApiProperty()
  lang?: string;

  @ApiProperty()
  likes_count?: number;

  @ApiProperty()
  shares_count?: number;

  @ApiProperty()
  comments_count?: number;

  @ApiProperty()
  views_count?: number;

  @ApiProperty()
  toxicity?: number;

  @ApiProperty()
  severe_toxicity?: number;

  @ApiProperty()
  threat?: number;

  @ApiProperty()
  identity_attack?: number;

  @ApiProperty()
  insult?: number;

  @ApiProperty()
  profanity?: number;

  @ApiProperty()
  restricted?: string[];

  @ApiProperty()
  added_at?: Date;

  @ApiProperty()
  updated_at?: Date;

  @ApiProperty()
  engagement?: number;

  @ApiProperty()
  engagement_identified?: number;

  @ApiProperty()
  nf_engagement_n?: number;

  @ApiProperty()
  nf_engagement_p?: number;

  @ApiProperty()
  engagers_unique?: string[];

  @ApiProperty()
  engagers_unique_n?: number;

  @ApiProperty()
  engagers_unique_p?: number;

  @ApiProperty()
  nf_unique_engagement_n?: number;

  @ApiProperty()
  id?: number;

  @ApiProperty()
  private_account_id?: number;

  @ApiProperty()
  replied_to_id?: string;

  @ApiProperty()
  text_additional?: string;

  @ApiProperty()
  status?: string;

  @ApiProperty()
  status_details?: Record<string, any>;

  @ApiProperty()
  active?: boolean;

  @ApiProperty()
  original_post_id?: string;

  @ApiProperty()
  post_platform_id_new?: string;

  @ApiProperty()
  follower_engagement_n?: number;

  @ApiProperty()
  follower_engagers_unique_n?: number;

  @ApiProperty()
  account_id?: string;

  @ApiProperty()
  jenkins_build_number?: number;

  @ApiProperty()
  jenkins_job_name?: string;

  @ApiProperty()
  perspective?: boolean;
}
