<script>
	import { onMount } from "svelte";
	import Form from "$lib/component/Form.svelte";

	export let data;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			});
		});
		// observer.observe(animatedElement);
	});
	onMount(() => {
		window.addEventListener("scroll", function () {
			var elements = document.querySelectorAll(".elementZviditelneni");
			elements.forEach((element) => {
				var position = element.getBoundingClientRect();
				if (position.top < window.innerHeight && position.bottom >= 0) {
					element.style.opacity = 1;
				}
			});
		});
	});

	let cena = 899; // Počáteční cena
	onMount(() => {
		const checkbox = document.getElementById("checkboxCenik");

		checkbox.addEventListener("change", function () {
			if (checkbox.checked) {
				cena = 0;
			} else {
				cena = 899;
			}
		});
	});

	//Ecomail - https://www.ecomail.cz
	// api connection
	/* function fetchData() {
    fetch("https://api.ecomail.cz/ecomail/lead")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } */
</script>

<section class="p-10 shadow-xl relative z-10">
	<h2 class="text-4xl px-10 my-10 font-medium">Jak probíhá spolupráce?</h2>
	<div class="flex flex-col w-full p-10 mt-24 md:flex-row uppercase gap-5">
		<div class="flex items-end rounded-xl karta1 w-full justify-center">
			<p class="text-2xl text-nowrap">První kontakt</p>
		</div>

		<svg
			class="w-64"
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

		<div class="flex items-end rounded-xl karta2 w-full justify-center">
			<p class="text-2xl">Podklady</p>
		</div>
		<svg
			class="w-64"
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
		<div class="flex items-end rounded-xl karta3 w-full justify-center">
			<p class="text-2xl">Vývoj</p>
		</div>
		<svg
			class="w-64"
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
		<div class="flex items-end rounded-xl karta4 w-full justify-center">
			<p class="text-2xl">Testování</p>
		</div>
		<svg
			class="w-64"
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
		<div class="flex items-end rounded-xl karta5 w-full justify-center">
			<p class="text-2xl">Předání</p>
		</div>
	</div>
</section>

<section class="textTechnologie py-20 min-h-80 items-center flex font-bold">
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
		class="flex flex-col max-w-screen-2xl gap-10 lg:flex-row md:mx-auto text-white">
		<div class="flex flex-col md:w-1/2">
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
		<div class="mt-auto">
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

<!--	<section class="rounded-xl my-10 newsletterKarta elementZviditelneni" id="">
		<div
			class="flex w-1/2 flex-col border md:flex-row rounded-xl newsletter md:mx-auto">
			<h2 class="flex items-center w-full text-3xl">Odběr novinek</h2>
			<input
				class="w-full p-3 m-5 border rounded-xl"
				type="text"
				id="EMAIL"
				name="EMAIL"
				autocomplete="off"
				placeholder="e-mail"
				data-required="true"
				required=""
				data-np-autofill-field-type="email" />
		</div>
	</section>-->

<!-- <section>Skóre stránek, sledování a analytika. Práce s verzemi, zálohy verzí, možnost zpětné verze.</section>
<section>Vývoj probíhá na frameworku Svelte, který mění tradiční přístup a nabízí přímější a efektivnější způsob tvorby webových aplikací. Je to vynikající volba pro ty, kteří hledají moderní, inovativní a produktivní webé aplikace.</section> -->
<!-- <section>
  <p>Chcete se potkat a probrat projekt osobně?</p>
</section>

<section class="faq">
  <div></div>
</section>

<section>
  <div class={isVisible ? "animated-element visible" : "animated-element"} bind:this={animatedElement}>
    <p>Your content goes here...</p>
  </div>
</section> -->

<!-- <div>
    <p>Nasloucháme a ptáme se</p>
  </div> -->

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
