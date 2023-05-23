import { Injectable, OnModuleInit } from '@nestjs/common';
import { google } from 'googleapis';
import YoutubeConfig from 'src/common/config/youtube';

type GetPostsParams = Readonly<{
  channelId: string;
  startDate?: string;
  endDate?: string;
}>;

@Injectable()
export default class YouTubeService {
  constructor(private readonly config: YoutubeConfig) {}

  async getPosts(params: GetPostsParams) {
    const youtube = google.youtube({
      version: 'v3',
      auth: this.config.apiKey,
    });

    const startDate = '2023-05-01T00:00:00Z'; // Початкова дата періоду
    const endDate = '2023-05-07T23:59:59Z'; // Кінцева дата періоду

    const response = await youtube.search.list({
      part: ['snippet'],
      channelId: params.channelId,
      type: ['video'],
      publishedAfter: startDate,
      publishedBefore: endDate,
      maxResults: 50, // Максимальна кількість результатів (максимум 50)
    });

    return response.data.items.map((item) => {
      const postId = item.id.videoId;
      const title = item.snippet.title;
      const publishedAt = item.snippet.publishedAt;

      return { postId, title, publishedAt };
    });
  }
}
