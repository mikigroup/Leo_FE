<section class="bg-gray-50 scroll-mt-24" id="spoluprace">
	<div class="p-4 min-h-[500px] max-w-screen-2xl mx-auto ">
	<h2 class="text-4xl lg:px-10 my-10 font-bold">Jak probíhá spolupráce?</h2>
	<p class="text-lg lg:px-10 mb-10 text-gray-600">Od prvního kontaktu po spuštění vašeho objednávkového systému</p>
	<div class="flex flex-col w-full py-10 mt-16 xl:flex-row uppercase gap-5">
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
	
	<!-- Detailní popis procesu -->
	<div class="process-details mt-16 px-4">
		<div class="grid md:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
			<div class="process-detail">
				<h4 class="font-semibold text-lg mb-2">1.</h4>
				<p class="text-sm text-gray-600">Vyplníte formulář nebo nás zavoláte. Domluvíme si konzultaci a probereme vaše potřeby.</p>
			</div>
			<div class="process-detail">
				<h4 class="font-semibold text-lg mb-2">2.</h4>
				<p class="text-sm text-gray-600">Předáte nám menu, logo, kontakty. Pomůžeme s výběrem balíčku a designu.</p>
			</div>
			<div class="process-detail">
				<h4 class="font-semibold text-lg mb-2">3.</h4>
				<p class="text-sm text-gray-600">Vytvoříme váš objednávkový web podle specifikace a vybraného designu.</p>
			</div>
			<div class="process-detail">
				<h4 class="font-semibold text-lg mb-2">4.</h4>
				<p class="text-sm text-gray-600">Společně otestujeme funkcionalitu a provedeme případné úpravy.</p>
			</div>
			<div class="process-detail">
				<h4 class="font-semibold text-lg mb-2">5.</h4>
				<p class="text-sm text-gray-600">Spustíme ostrý provoz a předáme vám administraci. Začínáme!</p>
			</div>
		</div>
	</div>
	</div>
</section>

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

	.process-details {
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 1rem;
		padding: 2rem;
		margin: 0 1rem;
	}

	.process-detail {
		text-align: center;
		
		h4 {
			color: vars.$font-main-color;
		}
		
		p {
			line-height: 1.5;
		}
	}

	@media (max-width: 768px) {
		.process-details .grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
