<script lang="ts">
	import { slide } from "svelte/transition";
	import { onMount } from "svelte";
	import { spring } from "svelte/motion";
	
	let horizontalPosition = spring(-100, {
		stiffness: 0.1,
		damping: 0.15
	});

	onMount(() => {
		horizontalPosition.set(0);
	});

	let menuVisible: boolean = false;
	let menuElement: HTMLDivElement;
	let menuButton: HTMLDivElement;

	onMount(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			const target = event.target as Node;

			if (
				menuVisible &&
				menuElement &&
				!menuElement.contains(target) &&
				!menuButton.contains(target)
			) {
				menuVisible = false;
			}
		};
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	});
</script>

<nav class="bg-white w-full px-5 lg:px-10 pb-5 pt-3 shadow-2xl relative">
	<!-- První část zůstává stejná -->
	<div class="flex flex-row">
		<div class="lg:basis-1/3 mt-auto">
			<div class="flex md:justify-start">
				<a href="/" class="flex logo">
					<img
						class="w-40 md:w-44 xl:w-52"
						src="/maly_leo_logo.svg"
						alt="Malý Leo" />
				</a>
			</div>
		</div>
		<div
			class="flex-col w-full text-center pt-10 md:flex lg:basis-1/3 basis-3/5">
			<div class="mail">
				<p class="text-lg md:text-2xl xl:text-3xl font-bold">
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
				<a
					class="text-nowrap inline-block"
					style="transform: translateX({$horizontalPosition}%)"
					href="tel:00420733362418"
					title="...nebo zavolejte."
					on:mouseenter={() => rotation.set(0)}>
					+420 733 362 418
				</a>
			</div>
		</div>
		<div class="flex justify-end lg:basis-1/3 basis-1/5 items-center pt-5">
			<div
				bind:this={menuButton}
				class="p-2 rounded-3xl cursor-pointer transition-colors duration-300 svgNav">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="menu-button"
					on:click={() => (menuVisible = !menuVisible)}
					class="w-8"
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
	</div>

	{#if menuVisible}
		<div
			bind:this={menuElement}
			id="menu"
			class="absolute right-0 top-full bg-white z-50
            w-full md:w-1/4 lg:w-1/5
            shadow-lg rounded-xl
            border border-gray-200
            mx-auto md:mx-0 p-5"
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
		position: relative;

		&::before,
		&::after {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			height: 2px;
			background-color: vars.$color3;
			transform: scaleX(0); // začíná s nulovou šířkou
			transition: transform 0.3s ease; // animace trvá 300ms
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		&:hover {
			&::before,
			&::after {
				transform: scaleX(1); // roztáhne se na plnou šířku
			}
		}
	}

	.svgNav:hover {
		background-color: vars.$color3;
	}
</style>
