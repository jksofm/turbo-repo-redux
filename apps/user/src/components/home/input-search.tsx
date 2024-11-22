import { appService } from "@data/services";
import { SearchIcon } from "@ui/icons"
import { debounce, decodeURIComponent, filterMainContent } from "@utils/helpers";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {useCustomSearchParams} from "@repo/utils/hooks"
import {LoadingOutlined} from "@ant-design/icons"
export function InputSearch() {

const [options,setOptions] = useState<string[]>([])
const {searchParams,parseSearchParams,updateSearchParams} = useCustomSearchParams()
const params = parseSearchParams()
const refList = useRef<HTMLDivElement>(null); 

  const onSearch = useCallback(
    debounce((e) => {
      const searchKeyword = e?.target?.value;
     
      updateSearchParams({...params,q: searchKeyword})
   
  
    }, 500),
    [searchParams],
  );
const {data,isLoading} = appService.useGetPlaylist({q: decodeURIComponent(searchParams?.get('q') as string) as string, maxResults: 5})
const videoTitles = useMemo(()=>{
    return data?.items?.map(item => item.snippet.title)
},[data]);

useEffect(()=> {
    if(data && searchParams.get('q')){
        setOptions(videoTitles || [])
    } 
}, [data])

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refList.current && !refList.current.contains(event.target as Node)) {
        setOptions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refList]);


  return (
    <div  className="bg-inputBackground relative flex-1 rounded-custom flex items-center gap-[15px]">
    <div className="py-[10px] pl-[14px]">
     {isLoading ? <LoadingOutlined className="text-white" /> : <SearchIcon />}

    </div>
    <input defaultValue={searchParams.get("q") || ""}  onFocus={()=>{
        setOptions(videoTitles || [])
    }} onChange={onSearch}    type="text" placeholder="Search Videos" className="h-full flex-1 p2 text-[#787878] rounded-md bg-inputBackground outline-none py-[10px]"/>

    {options?.length && (
        <div ref={refList} className="absolute z-[100] bg-[#25242A] rounded-custom w-full top-[110%] bg-opacity-85 left-0 py-[20px] px-[15px] flex flex-col gap-[10px]">
   
        {options?.map((option, index) => {
            return <span onClick={(e)=>{
                // e.stopPropagation()
                console.log('option', option)
                updateSearchParams({...params,q: filterMainContent(option)})
                setOptions([])
            }}  key={index} className="p2 cursor-pointer hover:text-noti">{option}</span>
        })}



    </div>
    )}


</div>

  )
}


