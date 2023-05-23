import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSourceDto } from './dto/create-source.dto';
import UpdateSourceDto from './dto/update-source.dto';
import SourceEntity from './source.entity';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Injectable()
export class SourceService {
  constructor(private readonly prisma: PrismaService) {}

  async createSource(createSourceDto: CreateSourceDto): Promise<SourceEntity> {
    const source = await this.prisma.source.create({ data: createSourceDto });

    return source as SourceEntity;
  }

  async getAllSources(): Promise<SourceEntity[]> {
    const sources = await this.prisma.source.findMany();

    return sources as SourceEntity[];
  }

  async getSourceById(id: number): Promise<SourceEntity> {
    const source = await this.prisma.source.findUnique({ where: { id } });

    if (!source) {
      throw new NotFoundException();
    }

    return source as SourceEntity;
  }

  async updateSource(
    id: number,
    updateSourceDto: UpdateSourceDto,
  ): Promise<SourceEntity> {
    const affectedSource = await this.prisma.source.update({
      where: { id },
      data: updateSourceDto,
    });

    return affectedSource as SourceEntity;
  }

  async deleteSource(id: number): Promise<void> {
    await this.prisma.source.delete({ where: { id } });
  }
}
