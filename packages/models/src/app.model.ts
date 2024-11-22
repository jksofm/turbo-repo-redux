
export interface ParamRequest {
  part? : string;
  maxResults?: number,
  q?: string,
  type?:  string,
  key?: string,
  videoId?: string,
  chart?: string
}
export interface Statistics {
  
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;

}
export interface VideoItem {
  kind: string;
  etag: string;
  id: {
      kind: string;
      channelId: string;
      videoId?: undefined;
  } | string ;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: {
            url: string;
            width: number;
            height: number;
        };
        medium: {
            url: string;
            width: number;
            height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;

};
statistics: Statistics
}
export interface  VideoListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
      totalResults: number;
      resultsPerPage: number;
  };
  items: VideoItem[];
}