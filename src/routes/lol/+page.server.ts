import type { PageServerLoad } from './$types';

export async function load ({fetch}){
    // let thiny = await fetch(`/api/get_summoner_data/`)
    let thiny = await fetch("api/get_summoner_data")
    console.log(thiny.status)
    const lol = await thiny.json()

    console.log(lol)

        return {    
        data: lol.Kayn_data
    };
} 