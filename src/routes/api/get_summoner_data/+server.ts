import { Client } from 'shieldbow';

import { LolApi, Constants } from 'twisted'
import { RIOT_DEV_API_KEY} from '$env/static/private'


const api = new LolApi({key: RIOT_DEV_API_KEY})


export async function GET () {
  console.log(RIOT_DEV_API_KEY)

  let summoner = await api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
  let summoner2 = await api.Summoner.getByName('SirYum', Constants.Regions.AMERICA_NORTH)
  return new Response(JSON.stringify({Kayn_data: summoner2.response.id.toString()}), {status: 200})
}

