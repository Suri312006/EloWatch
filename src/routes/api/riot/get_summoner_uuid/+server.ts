import { Client } from 'shieldbow';

import { LolApi, Constants } from 'twisted'
import { MY_RIOT_API_KEY} from '$env/static/private'


const api = new LolApi({key: MY_RIOT_API_KEY})


export async function POST ({request}) {

    let data = await request.json()
    let name = data

    console.log(name)

  
   let summoner2 = await api.Summoner.getByName(name, Constants.Regions.AMERICA_NORTH)
   
 return new Response(JSON.stringify({Kayn_data: summoner2.response.id.toString()}), {status: 200})

}
//todo need to work on the methodology to get these things
//todo need to map

//* code that should work
// const api = new LolApi({key: MY_RIOT_API_KEY})

// export async function GET () {

//   let summoner = await api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
//   return new Response(JSON.stringify({Kayn_data: summoner.response.id.toString()}), {status: 200})
// }

