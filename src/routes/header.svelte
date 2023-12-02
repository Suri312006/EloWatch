<script lang="ts">
	// @ts-nocheck

	import { AppBar } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { draw } from 'svelte/transition';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

	const drawerSettings: DrawerSettings = {
	id: 'nav-drawer',
	// Provide your property overrides:
	bgDrawer: 'bg-secondary-900 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-primary-500/50 via-trinary-500/50 to-secondary-500/50',

};

const fancyDrawerStore = () => {
	drawerStore.open(drawerSettings)
}


</script>

<AppBar
	background="max-lg:backdrop-blur py-0.5"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<a class="flex justify-evenly items-center" href="/">
			<!-- temporary logo-->
			<img src="cropped-logo.png" alt="logo" class=" h-[5rem] p-3 mt-1" />
			<!-- can add name here after, shouldnt scale from desktop to mobile-->
			<h1 class="font-bold text-5xl pt-2">TRACE</h1>
		</a>
	</svelte:fragment>

	<!-- end section -->
	<svelte:fragment slot="trail">
		<div id="desktop-View" class="max-md:hidden justify-between mr-10">
			<ul class="flex justify-evenly text-3xl items-center font-medium space-x-5 min-w-[25rem]">
				<li><a href="/events" class="hover:text-primary-400 font-bold">EVENTS</a></li>
				<li>|</li>
				<li><a href="/resources" class="hover:text-primary-400 font-bold">RESOURCES</a></li>
				<li>|</li>
				<li><a href="/about_us" class="hover:text-primary-400 font-bold">ABOUT</a></li>
				<li>|</li>
				<button  use:popup={popupClick} class="bg-transparent hover:text-primary-400 font-bold"> SOCIALS </button>
				<!-- <li class='flex items-center'>
				  <a href="/contact">Contact</a>
				  <CaretRight class="h-[1.5rem] w-[1.5rem]"/>
			  </li> -->
			</ul>
		</div>

		<!--popup for socials-->
		<div class="card variant-filled-primary mt-1" data-popup="popupClick">
			<ul class="flex flex-col justify-center items-center space-y-2">
				<li>
					<a href="https://instagram.com/trace.ucsc?igshid=MmVlMjlkMTBhMg=="  target="_blank" class="btn">
						<i class="fab fa-instagram hover:text-primary-400 text-2xl"></i>
					</a>
				</li>
				<li>
					<a href="https://github.com/T-R-A-C-E" target="_blank" class="btn">
						<i class="fab fa-github hover:text-primary-400 text-2xl"></i>
					</a>
				</li>
				<li>
					<a href="https://discord.gg/wUWu7hJPds" target="_blank" class="btn">
						<i class="fab fa-discord hover:text-primary-400 text-2xl"></i>
					</a>
				</li>
			</ul>
			<div class="arrow bg-surface-100-800-token"></div>
		</div>

		<!-- mobile view -->
		<!-- work on this after finalizing desktop view-->
		<div id="mobile-view" class=" md:hidden">
			<button type="button" on:click={fancyDrawerStore} class="btn bg-transparent">
				<i class=" fa-solid fa-bars text-3xl hover:text-primary-400" />
				<!-- find the three dashes icon lmfao-->
				<!-- to change what appears here, go to root layout.svelte-->
			</button>
		</div>

		<!--for medium, we can use tree view for contacts
		<div id="medium-contact-us" class=" max-sm:hidden md:hidden p-6">
			<button class="btn bg-transparent" use:popup={popupClick}>
			<i class="fa-solid fa-link text-xl hover:text-primary-400"/>
			</button>

			<div class="card p-2 variant-filled-primary" data-popup="popupClick">

				<ul class="flex justify-between items-center">
					<li>
						<a href="link to insta"
							><button type="button" class="btn">
								<i class="fa-brands fa-instagram hover:text-primary-400 text-2xl" />
							</button></a
						>
					</li>
					<li>
						<a href="link to github"
							><button type="button" class="btn">
								<i class="fa-brands fa-github hover:text-primary-400 text-2xl" />
							</button></a
						>
					</li>
					<li>
						<a href="link to discord"
							><button type="button" class="btn">
								<i class="fa-brands fa-discord hover:text-primary-400 text-2xl" />
							</button></a
						>
					</li>
				</ul>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div> -->

		<!-- for desktop 
		<div id="contact-us" class="max-md:hidden">
			<ul class="flex justify-between items-center">
				<li>
					<a href="link to insta"
						><button type="button" class="btn">
							<i class="fa-brands fa-instagram hover:text-primary-400 text-2xl" />
						</button></a
					>
				</li>
				<li>
					<a href="link to github"
						><button type="button" class="btn">
							<i class="fa-brands fa-github hover:text-primary-400 text-2xl" />
						</button></a
					>
				</li>
				<li>
					<a href="link to discord"
						><button type="button" class="btn">
							<i class="fa-brands fa-discord hover:text-primary-400 text-2xl" />
						</button></a
					>
				</li>
			</ul>
		</div>-->
	</svelte:fragment>
</AppBar>
