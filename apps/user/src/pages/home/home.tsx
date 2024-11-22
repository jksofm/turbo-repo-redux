import { appService } from "@data/services"

import { FilterTag, VideoList } from "@/components/home";

export function Home() {
  // const {data} = appService.useGetPlaylist()
  // console.log('data', data)
  return (
    <div className="pt-[15px] pl-[20px] pr-[34px] pb-[63px]">
      <FilterTag />
      <VideoList />
      

    </div>
  )
}

