<script lang="ts">
	import { goto } from "$app/navigation";

	export let data;
	console.log(data)
	let formData = {
		SummonerName: ''
	}
	const SummonerLink = (event: Event) => {
		event.preventDefault()

		goto(`/lol/${formData.SummonerName}`)
	}
</script>

{ #if data.session}
<h1>{data.session.user.email}</h1>
{ :else}
<h1> no user lol </h1>
{/if}	


<div class="flex justify-center items-center h-[calc(100vh-10rem)]">
<form method="POST" on:submit={SummonerLink}>
		<input
			type='text'
			id='summoner_name'
			bind:value={formData.SummonerName}
			autocomplete="off"
			placeholder="Summoner name..."
			class='rounded-xl h-10 w-60 text-center'
		/>

</form>
</div>
