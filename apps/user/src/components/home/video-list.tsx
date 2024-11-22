import VideoCard from "./video-card";
import { appService } from "@data/services";
import { useCustomSearchParams } from "@utils/hooks";

export function VideoList() {
    const {searchParams} = useCustomSearchParams()
    const q = searchParams.get("q")
    const {data} = appService.useGetPlaylist({q: q as string, maxResults: 30 })
  return (
    <div className="flex mt-[30px] gap-[30px] items-center flex-wrap">
     {data?.items.map((item,index)=>{
        return   <VideoCard data={item} key={index}  />
       

       
     })}
    </div>
  )
}
