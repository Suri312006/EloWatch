import { Client } from 'shieldbow';

import { LolApi, Constants } from 'twisted'
import { RIOT_API_KEY } from '$env/static/private'


const api = new LolApi({key: RIOT_API_KEY})


export async function GET () {

  let summoner = await api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
  return new Response(JSON.stringify({Kayn_data: summoner.response.id.toString()}), {status: 200})
}

