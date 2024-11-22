import { Comment, Recommend, VideoContent } from '@/components/video'


export function Video() {

  return (
    <div className='pt-[15px] flex gap-[30px] pl-[20px] pr-[34px] pb-[63px]'>
        
       <VideoContent />
        <div className='w-[422px]'>
            <Recommend />
        </div>
    </div>
  )
}
