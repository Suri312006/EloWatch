import type { PageServerLoad } from './$types';

export async function load ({params, fetch}){
    // let thiny = await fetch(`/api/get_summoner_data/`)
    let thiny = await fetch("/api/get_summoner_data")

    let summoner_data = await fetch("/api/riot/get_summoner_uuid", {
        method: "POST",
        body: JSON.stringify(params.slug)
    })

    console.log(summoner_data.status)
    const lol = await summoner_data.json()

    // console.log(lol)

        return {    
        data: lol.Kayn_data
    };
} 