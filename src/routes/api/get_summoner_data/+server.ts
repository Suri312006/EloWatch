import { Client } from 'shieldbow';

export const config = {
	runtime: 'nodejs16.x'
};



export async function GET () {
    
const client = new Client('RGAPI-a06fe8b7-5b34-43e0-8cc4-28c6ca64ccb4');

let data:String = ''

await client
  .initialize({
    region: 'na', // defaults to 'na' anyways.
  })
  .then(async () => {
    // After initialization, you can use the client to make requests
    // For example, lets fetch the following details of a summoner
    // - Summoner name, summoner level
    // - SoloQ ranking and LP
    // - The highest champion mastery
    // const summoner = await client.summoners.fetchBySummonerName('TheDrone7');
    // const leagueEntry = await summoner.fetchLeagueEntries();
    // const championMastery = summoner.championMastery;
    // const soloQ = leagueEntry.get('RANKED_SOLO_5x5');
    // const highest = await championMastery.highest();
    // console.log(`Summoner name: ${summoner.name} (level: ${summoner.level}).`);
    // console.log(`SoloQ: ${soloQ?.tier} ${soloQ?.division} (${soloQ?.lp} LP).`);
    // console.log(`Highest champion mastery: ${highest.champion.name} (M${highest.level} ${highest.points} points).`);
    const kayn = await client.champions.fetch('Kayn');

    data = kayn.lore
    

  });

  let myJson:object = {Kayn_data: data}
console.log("in_api", myJson)
  return new Response(JSON.stringify({Kayn_data: data}), {status: 200})

}