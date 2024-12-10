import { YouTube } from 'youtube-api';

export async function getGameVideos(gameTitle: string) {
  console.debug(`Fetching YouTube videos for game: ${gameTitle}`);
  
  try {
    // 这里需要你配置YouTube API密钥
    const youtube = new YouTube(import.meta.env.YOUTUBE_API_KEY);
    
    const response = await youtube.search.list({
      part: ['snippet'],
      q: `${gameTitle} gameplay`,
      type: ['video'],
      maxResults: 3,
      videoEmbeddable: true
    });

    return response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url
    }));
    
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    return [];
  }
} 