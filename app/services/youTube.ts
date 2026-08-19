export interface YouTubeVideo {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  thumbnail: string;
  videoId: string;
}


export async function getLoLYouTubeVideos(
  
  playlistId = 'PLbAFXJC0J5Gbogs-3Jk3nay0sAeAqi3SS' 
): Promise<YouTubeVideo[]> {
    try {
      
         console.log("From ty fucntion")
    const rssFeedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`
        
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('Failed to fetch YouTube videos');

    const data = await res.json();

    // Map and extract clean video object with embeddable IDs
    return data.items.map((item: any) => {
      // Extract clean YouTube Video ID from "yt:video:XXXXX" or URL
      const videoId = item.guid.split(':')[2] || item.link.split('v=')[1];
       
       
        
      return {
        title: item.title,
        link: item.link,
        guid: item.guid,
        pubDate: item.pubDate,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        videoId: videoId,
      };
    });
  } catch (error) {
    console.error('Error fetching LoL YouTube videos:', error);
    throw error;
  }
}

export function getYoutubeID(url: string) {
    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
    );

    return match?.[1] ?? "";
};