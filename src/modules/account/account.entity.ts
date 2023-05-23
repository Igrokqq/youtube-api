import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export enum PlatformType {
  YouTube = 'YouTube',
}

export default class AccountEntity
  implements Prisma.AccountUncheckedCreateInput
{
  @ApiProperty()
  id?: string;

  @ApiProperty()
  platform?: PlatformType;

  @ApiProperty()
  username?: string;

  @ApiProperty()
  full_name?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  created_time?: Date;

  @ApiProperty({ type: [String] })
  lang?: string[];

  @ApiProperty()
  followers_count?: number;

  @ApiProperty()
  is_verified?: boolean;

  @ApiProperty({ type: [String] })
  restricted?: string[];

  @ApiProperty()
  addedAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  internalID: number;

  @ApiProperty()
  status?: string;

  @ApiProperty({ type: 'object' })
  status_details?: Prisma.JsonValue;

  @ApiProperty()
  active?: boolean;

  @ApiProperty()
  source_id?: number;

  @ApiProperty()
  id_alt?: string;

  @ApiProperty()
  posts_count?: number;

  @ApiProperty()
  jenkins_build_number?: number;

  @ApiProperty()
  jenkins_job_name?: string;
}
