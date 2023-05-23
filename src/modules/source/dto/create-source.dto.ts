import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';

export class CreateSourceDto {
  @ApiProperty({ example: 'platform_id' })
  @IsOptional()
  platform_id?: string;

  @ApiProperty({ example: 'platform_username' })
  @IsOptional()
  platform_username?: string;

  @ApiProperty({ example: 'owner_name' })
  @IsOptional()
  owner_name?: string;

  @ApiProperty({ example: 'platform' })
  @IsOptional()
  platform?: string;

  @ApiProperty({ example: 'https://example.com' })
  @IsOptional()
  url?: string;

  @ApiProperty({ example: ['language1', 'language2'] })
  @IsOptional()
  languages?: string[];

  @ApiProperty({ example: true })
  @IsOptional()
  verified?: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  edge_case?: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  labelled?: boolean;

  @ApiProperty({ example: 'availability' })
  @IsOptional()
  availability?: string;

  @ApiProperty({ example: 10 })
  @IsOptional()
  n_posts?: number;

  @ApiProperty({ example: 100 })
  @IsOptional()
  likes_median?: number;

  @ApiProperty({ example: 50 })
  @IsOptional()
  shares_median?: number;

  @ApiProperty({ example: 30 })
  @IsOptional()
  comments_median?: number;

  @ApiProperty({ example: '2022-01-01T00:00:00Z' })
  @IsOptional()
  date_first?: Date;

  @ApiProperty({ example: '2022-12-31T23:59:59Z' })
  @IsOptional()
  date_last?: Date;

  @ApiProperty({ example: 0.5 })
  @IsOptional()
  engagement_median?: number;

  @ApiProperty({ example: 0.2 })
  @IsOptional()
  outlinks_percentage?: number;

  @ApiProperty({ example: 'https://example.com' })
  @IsOptional()
  outlink_top?: string;

  @ApiProperty({ example: 5 })
  @IsOptional()
  perspective_n?: number;

  @ApiProperty({ example: 2 })
  @IsOptional()
  severe_toxicity_n?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  identity_attack_n?: number;

  @ApiProperty({ example: 3 })
  @IsOptional()
  threat_n?: number;

  @ApiProperty({ example: 0.1 })
  @IsOptional()
  severe_toxicity_p?: number;

  @ApiProperty({ example: 0.05 })
  @IsOptional()
  identity_attack_p?: number;

  @ApiProperty({ example: 0.03 })
  @IsOptional()
  threat_p?: number;

  @ApiProperty({ example: 20 })
  @IsOptional()
  toxic_likes_median?: number;

  @ApiProperty({ example: 15 })
  @IsOptional()
  toxic_shares_median?: number;

  @ApiProperty({ example: 25 })
  @IsOptional()
  toxic_comments_median?: number;

  @ApiProperty({ example: 18 })
  @IsOptional()
  toxic_engagement_median?: number;

  @ApiProperty({ example: 1000 })
  @IsOptional()
  subscribers_start?: number;

  @ApiProperty({ example: 2000 })
  @IsOptional()
  subscribers_end?: number;

  @ApiProperty({ example: 100 })
  @IsOptional()
  subscriber_growth_n?: number;

  @ApiProperty({ example: 0.1 })
  @IsOptional()
  subscriber_growth_p?: number;

  @ApiProperty({ example: 500 })
  @IsOptional()
  exposure_n?: number;

  @ApiProperty({ example: 250 })
  @IsOptional()
  exposure_median?: number;

  @ApiProperty({ example: 50 })
  @IsOptional()
  toxic_exposure?: number;

  @ApiProperty({ example: 10 })
  @IsOptional()
  toxic_n?: number;

  @ApiProperty({ example: '2022-01-01T00:00:00Z' })
  @IsOptional()
  added_at?: Date;

  @ApiProperty({ example: '2022-01-02T12:34:56Z' })
  @IsOptional()
  updatedAt?: Date;

  @ApiProperty({ example: '2022-01-01T00:00:00Z' })
  @IsOptional()
  subscribers_start_date?: Date;

  @ApiProperty({ example: '2022-01-02T00:00:00Z' })
  @IsOptional()
  subscribers_end_date?: Date;
}
