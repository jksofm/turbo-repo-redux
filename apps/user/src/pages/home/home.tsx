import { appService } from "@data/services"

export function Home() {
  const {data} = appService.useGetPlaylist()
  console.log('data', data)
  return (
    <div>home</div>
  )
}

