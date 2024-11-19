<script>
	import { onMount } from "svelte";
	import Form from "$lib/component/Form.svelte";
	import Spoluprace from "$lib/component/Spoluprace.svelte";

	export let data;

	//Ecomail - https://www.ecomail.cz
	// api connection
	/* function fetchData() {
    fetch("https://api.ecomail.cz/ecomail/lead")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } */
</script>

<Spoluprace />

<section class="textTechnologie py-20 min-h-80 items-center flex font-bold px-4">
	<div class="max-w-screen-xl flex flex-col lg:flex-row mx-auto w-full px-4">
		<div class="basis-1/2 flex justify-center items-center">
			<p class="text-3xl w-full lg:max-w-md">
				Měníme tradiční přístup, nabízíme přímější a efektivnější způsob tvorby
				webových aplikací.
			</p>
		</div>
		<div class="w-px bg-gray-300 mx-4 hidden lg:block"></div>
		<div
			class="basis-1/2 flex justify-center items-center lg:pl-20 mt-8 lg:mt-0">
			<p class="text-3xl w-full lg:max-w-2xl">
				MALÝ LEO je vyvíjecí se systém, postavený na nejnovějších technologiích
				- Svelte a PostgreSQL.<br />
				Pravidelné zálohy.
			</p>
		</div>
	</div>
</section>

<section class="cenik py-20 px-5" id="cenik">
	<div
		class="flex flex-col max-w-screen-2xl gap-20 lg:flex-row md:mx-auto text-white px-4">
		<div class="flex flex-col lg:w-1/2">
			<div class="flex w-full">
				<h2 class="flex text-4xl font-bold">Startovací balíček</h2>
			</div>
			<div class="mt-10 text-xl">
				<p>
					<strong>Získejte</strong> svůj objednávkový systém s Malým Leem zcela
					<strong>ZDARMA!</strong> Využijte speciální zaváděcí nabídku.
				</p>
				<p class="pt-5">
					<strong
						>Zeptejte se na cokoliv, společně najdeme ideální řešení pro Vaše
						podnikání.</strong>
				</p>
			</div>
		</div>
		<div class="text-xl mt-auto">
			<h5 class="pb-5"><strong>Balíček obsahuje:</strong></h5>
			<ul>
				<li>- Zajištění domény</li>
				<li>- SEO optimalizace</li>
				<li>- 3 měsíce rozšířené podpory</li>
			</ul>
		</div>
		<div class="mt-auto flex justify-end lg:justify-normal">
			<button
				class="p-2 hover:bg-gray-800 text-2xl font-bold mr-4 transform transition-transform hover:scale-110">
				<span>Objednat</span>
			</button>
		</div>
	</div>
</section>

<section class="flex justify-center">
	<Form {data} />
</section>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

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

	.cenik {
		background: linear-gradient(
			to right,
			vars.$button-bg-main 30%,
			vars.$color3 80%
		);
	}

	.textTechnologie p {
		color: vars.$button-bg-main;
	}

	.textTechnologie {
		background-color: vars.$color5;
	}
</style>
