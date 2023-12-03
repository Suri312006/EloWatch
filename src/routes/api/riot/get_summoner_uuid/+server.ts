
import { LolApi, Constants } from 'twisted'
import { MY_RIOT_API_KEY} from '$env/static/private'


const api = new LolApi({key: MY_RIOT_API_KEY})


export async function POST ({request}) {
    let data = await request.json()
    let name = data
   let summoner = await api.Summoner.getByName(name, Constants.Regions.AMERICA_NORTH)
 return new Response(JSON.stringify({data: summoner.response.puuid.toString()}), {status: 200})

}


