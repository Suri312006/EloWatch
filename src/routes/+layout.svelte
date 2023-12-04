<script lang="ts">
	import '../app.pcss';
	import CustomHeader from './header.svelte';

	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	initializeStores();
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	export let data;

	console.log(data.session)
</script>

<Drawer position="right" width=" w-48" duration={100} padding=" py-5" rounded="">
	<!-- make this look cooler from docs (reactive thingy)-->

	<div class="grid grid-cols-1 divide-y">
		<div class="flex justify-center items-center">
			<a
				href="/"
				class="hover:text-primary-400 font-bold text-xl p-4"
				on:click={drawerStore.close}>HOME</a
			>
		</div>
		<div class="flex justify-center items-center">
			<a
				href="/events"
				class="hover:text-primary-400 font-bold text-xl p-4"
				on:click={drawerStore.close}>EVENTS</a
			>
		</div>
		<div class="flex justify-center items-center">
			<a
				href="/resources"
				class="hover:text-primary-400 font-bold text-xl p-4"
				on:click={drawerStore.close}>RESOURCES</a
			>
		</div>

		<div class="flex justify-center items-center">
			<a
				href="/about_us"
				class="hover:text-primary-400 font-bold text-xl p-4"
				on:click={drawerStore.close}>ABOUT</a
			>
		</div>

		<Accordion >
			<AccordionItem open={false}>
				<svelte:fragment slot="summary">
					<div
						class="flex justify-center items-center md:hover:text-primary-400 font-bold text-xl p-4"
					>
						SOCIALS
					</div>
				</svelte:fragment>
	
				<svelte:fragment slot="content">
					<ul class="flex flex-col justify-center items-center space-y-2">
						<li>
							<a
								href="https://instagram.com/trace.ucsc?igshid=MmVlMjlkMTBhMg=="
								target="_blank"
								class="btn"
							>
								<i class="fab fa-instagram md:hover:text-primary-400 text-2xl"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/T-R-A-C-E" target="_blank" class="btn">
								<i class="fab fa-github md:hover:text-primary-400 text-2xl"></i>
							</a>
						</li>
						<li>
							<a href="https://discord.gg/wUWu7hJPds" target="_blank" class="btn">
								<i class="fab fa-discord md:hover:text-primary-400 text-2xl"></i>
							</a>
						</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>

		<span class="flex-grow"> </span>
	</div>

	<div class="grid grid-cols-1 divide-y">
		
	</div>
</Drawer>

<div class=' '>
	<!-- <div class=' lg:flex-grow '> -->

	<AppShell>
		<!-- <AppShell class='lg:backdrop-blur lg:backdrop-brightness-100'> -->
		<!-- <AppShell class='lg:backdrop-blur lg:backdrop-brightness-100 lg:border lg:border-l-0 lg:border-r-0 lg:border-primary-600'> -->

	<svelte:fragment slot="header"><CustomHeader /></svelte:fragment>
	<!-- (sidebarLeft) -->

	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot/>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment> -->
</AppShell>
</div>

  


 