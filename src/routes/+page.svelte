<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

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

<form method="POST" on:submit={SummonerLink}>
		<input
			type='text'
			id='summoner_name'
			bind:value={formData.SummonerName}
			autocomplete="off"
			placeholder="Summoner name..."
		/>

</form>

