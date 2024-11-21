import { apiKey, apiUrl } from '@constants/env.constants';
import { request } from '@data/api';
import {
  useQuery,
 
} from '@tanstack/react-query'


const proxyUrl = "https://cors-anywhere.herokuapp.com/"


export const appService = {
    useGetPlaylist : () => {
      const getPlaylist = async () => {
        await request(`${apiUrl}?part=snippet&maxResults=50&q=ManUnited&key=${apiKey}`, {
          method: "GET",
      });
      }
      const {data,isLoading} = useQuery({ queryKey: ['todos'], queryFn: getPlaylist })


      return {data,isLoading}

    }
};
