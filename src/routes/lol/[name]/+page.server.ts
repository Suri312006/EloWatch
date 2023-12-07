import type { PageServerLoad } from './$types';
import { LolApi, Constants } from 'twisted';
import { MY_RIOT_API_KEY } from '$env/static/private';

const tapi = new LolApi({ key: MY_RIOT_API_KEY });


export async function load({ params, fetch }) {
	let Summoner = await getSummoner(params.name);

	console.log(Summoner.pfpLink);
	return {
		summoner: Summoner
	};
}

const getSummoner = async (name: string) => {
	// let summoner = await tapi.Summoner.getByName(name, Constants.Regions.AMERICA_NORTH);
	let summoner = await tapi.Summoner.getByAccountID("QwerkyQuinoa#69420", Constants.Regions.AMERICA_NORTH)
	let link_to_id = `https://raw.communitydragon.org/13.9/game/assets/ux/summonericons/profileicon${summoner.response.profileIconId}.png`;
	
	return {
		accountid: summoner.response.accountId,
		pfpLink: link_to_id,
		level: summoner.response.summonerLevel,
		name: summoner.response.name,
		id: summoner.response.id,
		puuid: summoner.response.puuid,
		revisionDate: summoner.response.revisionDate
	};
};


