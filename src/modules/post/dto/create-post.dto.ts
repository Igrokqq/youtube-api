// create-post.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  readonly character: string;

  @ApiProperty()
  readonly platform: string;

  @ApiProperty({ name: 'original_post_author_id' })
  readonly originalPostAuthorId: string;

  @ApiProperty({ name: 'created_time' })
  readonly createdTime: Date;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly links: string[];

  @ApiProperty()
  readonly domains: string[];

  @ApiProperty({ name: 'text_original' })
  readonly textOriginal: string;

  @ApiProperty()
  readonly lang: string;

  @ApiProperty({ name: 'likes_count' })
  readonly likesCount: number;

  @ApiProperty({ name: 'shares_count' })
  readonly sharesCount: number;

  @ApiProperty({ name: 'comments_count' })
  readonly commentsCount: number;

  @ApiProperty({ name: 'views_count' })
  readonly viewsCount: number;

  @ApiProperty()
  readonly toxicity: number;

  @ApiProperty({ name: 'severe_toxicity' })
  readonly severeToxicity: number;

  @ApiProperty()
  readonly threat: number;

  @ApiProperty({ name: 'identity_attack' })
  readonly identityAttack: number;

  @ApiProperty()
  readonly insult: number;

  @ApiProperty()
  readonly profanity: number;

  @ApiProperty()
  readonly restricted: string[];

  @ApiProperty({ name: 'added_at' })
  readonly addedAt: Date;

  @ApiProperty({ name: 'updated_at' })
  readonly updatedAt: Date;

  @ApiProperty()
  readonly engagement: number;

  @ApiProperty({ name: 'engagement_identified' })
  readonly engagementIdentified: number;

  @ApiProperty({ name: 'nf_engagement_n' })
  readonly nfEngagementN: number;

  @ApiProperty({ name: 'nf_engagement_p' })
  readonly nfEngagementP: number;

  @ApiProperty({ name: 'engagers_unique' })
  readonly engagersUnique: string[];

  @ApiProperty({ name: 'engagers_unique_n' })
  readonly engagersUniqueN: number;

  @ApiProperty({ name: 'engagers_unique_p' })
  readonly engagersUniqueP: number;

  @ApiProperty({ name: 'nf_unique_engagement_n' })
  readonly nfUniqueEngagementN: number;

  @ApiProperty({ name: 'id' })
  readonly postId: number;

  @ApiProperty({ name: 'private_account_id' })
  readonly privateAccountId: number;

  @ApiProperty({ name: 'replied_to_id' })
  readonly repliedToId: string;

  @ApiProperty({ name: 'text_additional' })
  readonly textAdditional: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty({ name: 'status_details' })
  readonly statusDetails: Record<string, any>;

  @ApiProperty()
  readonly active: boolean;

  @ApiProperty({ name: 'original_post_id' })
  readonly originalPostId: string;

  @ApiProperty({ name: 'post_platform_id_new' })
  readonly postPlatformIdNew: string;

  @ApiProperty({ name: 'follower_engagement_n' })
  readonly followerEngagementN: number;

  @ApiProperty({ name: 'follower_engagers_unique_n' })
  readonly followerEngagersUniqueN: number;

  @ApiProperty({ name: 'account_id' })
  readonly accountId: string;

  @ApiProperty({ name: 'jenkins_build_number' })
  readonly jenkinsBuildNumber: number;

  @ApiProperty({ name: 'jenkins_job_name' })
  readonly jenkinsJobName: string;

  @ApiProperty()
  readonly perspective: boolean;
}
