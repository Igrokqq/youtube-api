import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import UpdatePostDto from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto });
  }

  async getPostById(id: number) {
    return this.prisma.post.findUnique({ where: { internalID: id } });
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { internalID: id },
      data: updatePostDto,
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({ where: { internalID: id } });
  }
}
