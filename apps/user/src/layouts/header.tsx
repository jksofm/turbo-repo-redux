import { InputSearch } from "@/components/home";
import { MicroIcon, NotiIcon } from "@ui/icons";
import { Badge } from "antd";

export function Header() {
  return (
    <div className="pl-5 gap-12 !leading-none bg-black pt-[25px] pr-[34px] pb-[15px] border-none flex justify-between items-center">
        <div className="flex max-w-[648px] flex-1 gap-[15px] items-center">
 
         <InputSearch />
        <MicroIcon />
        </div>

        <div className="flex items-center gap-[22px]">
        <Badge  className="text-[8px]" size="small" count={10} overflowCount={9}>
        <NotiIcon />

        </Badge>
   
            <div className="w-[34px] rounded-full h-[34px] bg-[#5F6AB9] flex items-center justify-center">
                <span className="h3 text-white">P</span>
            </div>

        </div>


    </div>
  )
}
