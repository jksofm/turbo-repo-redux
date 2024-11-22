import { videoPath } from "@/pages/video"
import { VideoItem } from "@models/app.model"
import { EyeIcon, MessageIcon } from "@ui/icons"
import { getRelativeTime } from "@utils/helpers"
import { Link } from "react-router-dom"

interface VideoCardProps {
  data?: VideoItem
}
function VideoCard({data}:VideoCardProps) {
  if(!data) return null;
  return (
    <Link to={videoPath.detail((data?.id as string))}>
        <div className="flex gap-5">
       <img className="w-[196px] rounded-custom h-[117px] object-cover" src={data?.snippet?.thumbnails.high.url} alt="Video thumbnail" />
       <div className="flex-1">
       <div className="p2 line-clamp-2 max-h-[56px] overflow-ellipsis whitespace-normal !leading-[17px] w-[80%]">
       {data?.snippet?.title}
        </div>
        <div className="p3 !leading-[17px] mt-[5px]">{getRelativeTime(data?.snippet?.publishTime)}</div>

        <div className="flex items-center gap-[15px] mt-[21px]">
            <div className="flex items-center gap-[7px]">
                <EyeIcon color="#787878" />
                <span className="p2">{new Intl.NumberFormat().format(Number(data?.statistics?.viewCount))}</span>
            </div>
            <div className="flex items-center gap-[7px]">
                <MessageIcon color="#787878" />
                <span className="p2">{new Intl.NumberFormat().format(Number(data?.statistics?.commentCount))}</span>
            </div>
        </div>

       </div>
    </div>
    </Link>

  )
}

export default VideoCard