import { categorites, menuItems, subscriptionItems } from "@constants/data.constant"
import { MenuIcon, YoutubeIcon} from "@repo/ui/icons"
import { Link } from "react-router-dom"
export function Sidebar() {


  return (
    <div className="pl-[30px] h-full overflow-y-scroll bg-black py-8 pr-6">
     <div className="w-full pl-[5px] flex justify-between items-center mb-7">
       <Link to="/"> <YoutubeIcon /></Link>
        <MenuIcon />
     </div>
     <div className="flex pl-[5px] border-b border-b-[#e5e7eb29] pb-[30px] flex-col gap-4"
     >
        {menuItems.map((item) => {
            const Icon = item.icon
          return <div key={item.id} className="flex items-center gap-[30px]">
            
              <div className="relative">
                {item.showNotification && (  <div className="absolute w-2 h-2 rounded-full top-[2px] left-[-4px] bg-noti"></div>)}
              
                <Icon /></div>
                <span className="p2">{item.title}</span>
          </div>
        })}

     </div>

     <div className="pt-[25px] border-b border-b-[#e5e7eb29] pb-[30px] pl-[5px]">

        <span className="p3">SUBSCRIPTIONS</span>

        <div className="flex mt-[22px] flex-col pl-[3px] gap-[15px]">

            {subscriptionItems.map((item)=>{
               return <div key={item.id} className="flex items-center gap-[27px]">
                 <div className="w-[22px] h-[22px] rounded-full bg-white"></div>
                 <div className="p2">{item.name}</div>

               </div>
            })}
        </div>
     </div>

     <div className="pt-[25px] pb-[30px] pl-[5px]">

<span className="p3">TOP CATEGORIES</span>

<div className="flex mt-[26px] flex-col pl-[3px] gap-[23px]">

    {categorites.map((item)=>{
       return <div key={item.id} className="flex items-center gap-[34px]">
         <div  style={{ backgroundColor: `#${item.color}` }}  className={`w-2 h-2 rounded-full`}></div>
         <div className="p2">{item.name}</div>

       </div>
    })}
</div>
</div>

<div className="p3 mt-[185px] block">© 2021 Google LLC</div>
    </div>

  )
}
