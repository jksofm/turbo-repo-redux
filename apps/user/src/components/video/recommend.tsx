import { appService } from '@data/services'
import VideoCard from './video-card'

export function Recommend() {
     const {data} = appService.useGetRecommendedList({ })
  return (
    <>
    <div className='p1 mb-6'>Recommended</div>
    <div className='flex flex-col gap-[25px]'>
    {data?.items?.map((item,index)=>{
        return   <VideoCard data={item} key={index}  />
       

       
     })}
   

    </div>
   
    </>
  )
}
