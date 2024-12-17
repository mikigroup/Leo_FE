<script lang="ts">
	import Form from "$lib/component/Form.svelte";
	import Spoluprace from "$lib/component/Spoluprace.svelte";
	import Header from "$lib/component/Header.svelte";
	import StartBalicek from "$lib/component/StartBalicek.svelte";
	import Argumenty from "$lib/component/Argumenty.svelte";
	import Marketing from "$lib/component/Marketing.svelte";

	export let data;

	const RECAPTCHA_KEY = "6LcTuowqAAAAAKnnZP-uso6ArvnEP9_5PCqyACk-";

	//Ecomail - https://www.ecomail.cz
	// api connection
	/* function fetchData() {
    fetch("https://api.ecomail.cz/ecomail/lead")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } */
</script>

<svelte:head>
	<title>MalyLeo.cz - Úvod</title>
	<script
		src="https://www.google.com/recaptcha/api.js?render={RECAPTCHA_KEY}"></script>
</svelte:head>

<main>
<Header />

<Argumenty />

<Spoluprace />

<Marketing />

<section
	class="textTechnologie py-20 min-h-80 items-center flex font-bold px-4">
	<div class="max-w-screen-xl flex flex-col lg:flex-row mx-auto w-full px-4">
		<div class="basis-1/2 flex justify-center items-center">
			<p class="text-3xl w-full lg:max-w-md">
				Měníme tradiční přístup, nabízíme přímější a efektivnější způsob tvorby
				webových aplikací.
			</p>
		</div>
		<div class="w-px bg-gray-300 mx-4 hidden lg:block"></div>
		<div class="h-px bg-gray-300 my-10 block"></div>
		<div class="basis-1/2 flex justify-center items-center lg:pl-20 lg:mt-0">
			<p class="text-3xl w-full lg:max-w-2xl">
				MALÝ LEO je vyvíjecí se systém, postavený na nejnovějších technologiích
				- Svelte a PostgreSQL.<br />
				Pravidelné zálohy.
			</p>
		</div>
	</div>
</section>

<StartBalicek />

<Form {data} />
</main>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

	.textTechnologie p {
		color: vars.$button-bg-main;
	}

	.textTechnologie {
		background-color: vars.$color5;
	}
</style>
