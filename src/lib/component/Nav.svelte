<script>
	import { slide } from "svelte/transition";

	let menuVisible = false;
	let scrolled = false;
</script>

<nav class="bg-white w-full px-5 lg:px-10 pb-5 pt-3 shadow-2xl relative">
	<!-- První část zůstává stejná -->
	<div class="flex flex-row">
		<div class="basis-1/3 mt-auto">
			<div class="flex md:justify-start">
				<a href="/" class="flex logo">
					<img
						class="w-40 md:w-44 xl:w-64"
						src="/maly_leo_logo.svg"
						alt="Malý Leo" />
				</a>
			</div>
		</div>
		<div
			class="flex-col w-full text-center pt-10 md:flex basis-1/3">
			<div class="mail">
				<p class="text-sm lg:text-2xl font-bold">
					<a
						href="mailto:info@malyleo.cz"
						title="Napište nám email..."
						rel="noopener"
						class="hover:underline transition-all duration-300">
						info@malyleo.cz
					</a>
				</p>
			</div>
			<div class="tel">
				<a class="text-nowrap" href="" title="...nebo zavolejte.">+420 733 362 418</a>
			</div>
		</div>
		<div class="flex justify-end basis-1/5 items-center pt-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="menu-button"
				on:click={() => (menuVisible = !menuVisible)}
				class="w-8 cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</div>
	</div>

	{#if menuVisible}
		<div
			id="menu"
			class="absolute right-0 top-full bg-white z-50
            w-full md:w-1/4 lg:w-1/5
            shadow-lg rounded-xl
            border border-gray-200
            mx-auto md:mx-0"
			transition:slide>
			<ul
				class="pt-4 text-base text-black flex flex-col md:justify-between md:pt-0 text-center">
				<li>
					<a class="block py-2 md:p-4" href="/#cenik">Objednat</a>
				</li>
				<li>
					<a class="block py-2 md:p-4" href="/#form">Zeptejte se</a>
				</li>
				<li>
					<a class="block py-2 md:p-4" href="/faq">FAQ</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

	.mail {
		color: vars.$font-main-color;
	}

	.tel {
		color: vars.$color3;
	}
	li {
		font-size: 1.2rem;
		color: vars.$font-main-color;
	}
</style>
