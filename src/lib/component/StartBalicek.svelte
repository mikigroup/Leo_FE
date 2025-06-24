<script lang="ts">
	import { textStore } from "$lib/stores/formStore";
	import {goto} from "$app/navigation";

	const vyplnitText = async () => {
		$textStore =
			"Dobrý den, mám zájem o startovací balíček (první měsíc zdarma). Prosím o kontaktování pro domluvení konzultace a výběr vhodného balíčku...";
		    await goto("/#form");
	}
</script>

<section
	class="cenik py-20 px-5 scroll-mt-16 lg:scroll-mt-32 xl:scroll-mt-56"
	id="cenik">
	<div
		class="flex flex-col max-w-screen-2xl gap-20 lg:flex-row md:mx-auto text-white px-4">
		<div class="flex flex-col lg:w-1/2 flex-shrink-0">
			<div class="flex w-full">
				<h2 class="flex text-4xl font-bold tracking-wide !text-white">Získejte první měsíc ZDARMA</h2>
			</div>
			<div class="mt-10 text-xl space-y-4">
				<p>
					<span class="tracking-widest"><strong>SPECIÁLNÍ NABÍDKA:</strong></span> První měsíc kteréhokoli balíčku bez poplatků!
				</p>
				<div class="bg-white/10 rounded-lg p-4 mt-6">
					<h3 class="text-lg font-semibold mb-2">Co vás čeká po objednání:</h3>
					<ul class="text-base space-y-1">
						<li>📞 <strong>Konzultace</strong> - probereme vaše potřeby</li>
						<li>📦 <strong>Výběr balíčku</strong> - najdeme ten pravý pro vás</li>
						<li>🎨 <strong>Design</strong> - šablona nebo vlastní design</li>						
					</ul>
				</div>
			</div>
		</div>
		<div class="mt-auto flex justify-end w-full pr-3">
			<button
				on:click={vyplnitText}
				class="hover:bg-gray-800 text-2xl font-bold ml-12 transform transition-transform hover:scale-110 w-52 flex justify-center items-center">
				<span class="tracking-widest">ZAČÍT ZDARMA</span>
			</button>
		</div>
	</div>
</section>

<style lang="scss">
	@use "$lib/styles/variables" as vars;
	@use "$lib/styles/mixins" as mixs;

	.cenik {
		background: linear-gradient(
			to right,
			vars.$button-bg-main 30%,
			vars.$color3 80%
		);
	}

	h2 {
		color: vars.$font-main-color;
	}

	button {
		padding: 1rem 3rem 1.1rem 3rem;
		background-color: vars.$button-bg-main;
		color: white;
		border-radius: 1rem;

		text-decoration: underline;
		text-underline-offset: 5px; // vzdálenost od textu
		text-decoration-thickness: 1px; // tloušťka čáry
		text-decoration-color: currentColor; // barva čáry (stejná jako text)
		text-decoration-style: solid;
	}
</style>
