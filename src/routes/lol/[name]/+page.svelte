<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    console.log(data)


</script>

<main>
{data.summoner.name}
<img src={data.summoner.pfpLink} alt="pfp">
</main>