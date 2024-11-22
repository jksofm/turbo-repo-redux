


export function FilterTag() {
    const filters = [
        {
            id: "all",
            name: "All",
        },
        {
            id: "gaming",
            name: "Gaming",
        },
        {
            id: "music",
            name: "Music",
        },
        {
            id: "grafic-design",
            name: "Grafic Design",
        },
        {
            id: "javascript",
            name: "Javascript",
        },
        {
            id: "apple",
            name: "Apple",
        },
        {
            id: "keyboards",
            name: "Keyboards",
        },
        {
            id: "website",
            name: "Website",
        },
        {
            id: "desks",
            name: "Desks",
        },
        {
            id: "unboxing",
            name: "Unboxing",
        },
        {
            id: "photography",
            name: "Photography",
        },
        {
            id: "jordans",
            name: "Jordans",
        },
        {
            id: "nike",
            name: "Nike"
        }
    ]
  return (
    <div className="flex items-center gap-[10px] flex-wrap w-[85%]">
        {filters.map((item)=>{
            return <div key={item.id} className="py-[7px] px-[15px] p2 bg-inputBackground rounded-custom">{item.name}</div>
        })}
    </div>
  )
}
