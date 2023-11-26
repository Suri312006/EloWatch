<script>
	let a = 0;
	let b = 0;
	let total = 0;

	async function roll() {
		const response = await fetch('/api/random');
		total = await response.json();
	}
</script>

<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}

<form method="POST" action="/getRandomNumber">
	<label>
		add a todo:
		<input
			name="description"
			autocomplete="off"
		/>
	</label>
</form>


<button on:click={roll}>Calculate</button>