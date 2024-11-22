import { videoPath } from "@/pages/video";
import { VideoItem } from "@models/app.model"
import { getRelativeTime } from "@utils/helpers";

import { Link } from "react-router-dom";


interface VideoCardProps {
  data: VideoItem
}
function VideoCard({data}:VideoCardProps) {


  
if(!data) return null
  return (
    <Link to={videoPath.detail((data?.id as any)?.videoId || "")}>
    <div className="w-[196px] h-[188px]">
        <img className="rounded-custom w-full h-[117px] object-cover" src={data?.snippet?.thumbnails.high.url} alt="video" />
        <div className="p2 line-clamp-2 max-h-[56px] overflow-ellipsis whitespace-normal !leading-[17px] mt-[15px] w-[80%]">
        {data?.snippet?.title}
        </div>
        <div className="p3 !leading-[17px] mt-[5px]">{getRelativeTime(data?.snippet?.publishTime)}</div>
    </div>
    </Link>

  )
}

export default VideoCard