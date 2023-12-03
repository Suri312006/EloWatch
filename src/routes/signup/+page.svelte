<script lang="ts">
	import type { ActionData } from './$types';

    export let data;

	export let form: ActionData;

    console.log(data.session)
</script>

<h1>looks like you dont have an account!</h1>

<h1>lets get you signed up bud!</h1>

<form method="POST" action="?/signup">
	<input name="email" type="email" placeholder="Email" value={form?.email ?? ''}/>
	<input name="password" type="password" placeholder="password"  />
	<input name="password_check" type="password" placeholder="repeat password" />

	<button> signup</button>

	{#if form?.password_mismatch}
		<p class=" text-2xl">passwords dont match monkey</p>
	{/if}
</form>
