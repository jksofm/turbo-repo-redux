import { apiKey, apiUrl } from '@constants/env.constants';
import { request } from '@data/api';
import { ParamRequest, VideoListResponse } from '@models/app.model';
import {
  useQuery,
 
} from '@tanstack/react-query'




export const appService = {
    useGetPlaylist : ({
      part = 'snippet',
      key = apiKey,
      maxResults = 5,
      q
    }: ParamRequest) => {
      const getPlaylist = async () => {
        const response =await request<VideoListResponse>(`${apiUrl}/search?part=${part}&maxResults=${maxResults}&q=${q}&key=${key}`, {
          method: "GET",
      });

      return response
      }
      const {data,isLoading} = useQuery({ queryKey: ['video',key,maxResults,q], queryFn: getPlaylist,retry: 0 })

      return {data,isLoading}

    },
    useGetDetail : ({
      key = apiKey,
      videoId,
      part = "snippet,contentDetails,statistics"
    }: ParamRequest) => {
      const getPlaylist = async () => {
        const response =await request<VideoListResponse>(`${apiUrl}/videos?part=${part}&key=${key}&id=${videoId}`, {
          method: "GET",
      });

      return response
      }
      const {data,isLoading} = useQuery({ queryKey: ['video',key,videoId] , queryFn: getPlaylist,retry: 0,enabled: !!videoId })

      return {data,isLoading}

    },
    useGetRecommendedList : ({
      key = apiKey,
      videoId,
      part = "snippet,contentDetails,statistics",
      maxResults=10,
      chart= "mostPopular"
    }: ParamRequest) => {
      const getPlaylist = async () => {
        const response =await request<VideoListResponse>(`${apiUrl}/videos?part=${part}&key=${key}&maxResults=${maxResults}&chart=${chart}`, {
          method: "GET",
      });

      return response
      }
      const {data,isLoading} = useQuery({ queryKey: ['video',key,videoId] , queryFn: getPlaylist,retry: 0})

      return {data,isLoading}

    }

};
