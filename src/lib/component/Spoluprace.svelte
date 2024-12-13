<section class="p-4 lg:p-10 min-h-[500px]">
	<h2 class="text-4xl lg:px-10 my-10 font-medium">Jak probíhá spolupráce?</h2>
	<div class="flex flex-col w-full py-10 lg:p-10 mt-24 xl:flex-row uppercase gap-5">
		<div class="flex items-end rounded-xl karta1 w-full justify-center">
			<p class="text-2xl text-nowrap">První kontakt</p>
		</div>
		<div class="flex justify-center">
			<svg
				class="w-8 lg:w-12 rotate-90 xl:rotate-0 my-4 lg:my-0"
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
			</svg>
		</div>

		<div class="flex items-end rounded-xl karta2 w-full justify-center">
			<p class="text-2xl">Podklady</p>
		</div>
		<div class="flex justify-center">
			<svg
				class="w-8 lg:w-12 rotate-90 xl:rotate-0 my-4 lg:my-0"
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
			</svg>
		</div>
		<div class="flex items-end rounded-xl karta3 w-full justify-center">
			<p class="text-2xl">Vývoj</p>
		</div>
		<div class="flex justify-center">
			<svg
				class="w-8 lg:w-12 rotate-90 xl:rotate-0 my-4 lg:my-0"
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
			</svg>
		</div>
		<div class="flex items-end rounded-xl karta4 w-full justify-center">
			<p class="text-2xl">Testování</p>
		</div>
		<div class="flex justify-center">
			<svg
				class="w-8 lg:w-12 rotate-90 xl:rotate-0 my-4 lg:my-0"
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
			</svg>
		</div>
		<div class="flex items-end rounded-xl karta5 w-full justify-center">
			<p class="text-2xl">Předání</p>
		</div>
	</div>
</section>
<!--<section>
	<div class="py-10"></div>
</section>-->

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

	.karta1,
	.karta2,
	.karta3,
	.karta4,
	.karta5 {
		padding: 1.4rem 1rem 1.4rem 1rem;
		border: 1px solid white;
		border-radius: 1.8rem;
		text-align: center;
		align-items: center;
		color: white;
	}
	.karta1 {
		background-color: vars.$color1;
	}
	.karta2 {
		background-color: vars.$color2;
	}
	.karta3 {
		background-color: vars.$color5;
	}
	.karta4 {
		background-color: vars.$color4;
	}
	.karta5 {
		background-color: vars.$color3;
	}
</style>
