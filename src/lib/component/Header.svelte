<script>
	import { page } from "$app/stores";

	// https://svelte.dev/docs/kit/images
	//<enhanced:img src="./path/to/your/image.jpg" alt="An alt text" />
	// optimalizace obrazku
</script>

<header class="px-2 md:px-10">
	<section class="pb-16">
		<div class="flex headerBanner">
			<div
				class="p-8 mx-2 xl:basis-1/2 xl:p-12 headerBanner01 mt-12 lg:mt-16 rounded-2xl">
				<h1 class="text-2xl 2xl:text-3xl font-bold lg:mb-6">
					Malý Leo - webové řešení pro váš byznys
				</h1>
				<p class="mb-11 mt-9 text-xl 2xl:text-2xl leading-7">
					Potřebujete rychlý, moderní a spolehlivý web?
					<br />
					Nabízíme tři hlavní benefity.
				</p>
				<div class="">
					<ul
						class="list-inside flex flex-col lg:flex-row gap-5 lg:gap-5 leading-7 text-sm">
						<li class="basis-1/3">
							<span
								class="argumenty1 inline-block px-4 py-2 mr-2 text-md 2xl:text-lg">
								VÝKON
							</span>
							<p class="lg:mt-4 text-lg 2xl:text-xl text-center">
								Optimalizované webové aplikace s rychlým načítáním a plynulým
								chodem
							</p>
						</li>
						<li class="basis-1/3">
							<span
								class="argumenty2 inline-block px-4 py-2 mr-2 text-md 2xl:text-lg">
								SPOLEHLIVOST
							</span>
							<p class="lg:mt-4 text-lg 2xl:text-xl a2 text-center">
								Bezpečný provoz s pravidelnými zálohami dat
							</p>
						</li>
						<li class="basis-1/3">
							<span
								class="argumenty3 inline-block px-4 py-2 mr-2 text-md 2xl:text-lg">
								DESIGN
							</span>
							<p class="lg:mt-4 text-lg 2xl:text-xl a3 text-center">
								Přizpůsobitelný Vašim potřebám
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</header>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

  .a2 {
		color: vars.$color2;
	};

	.a3 {
    color: vars.$color3;
  };

  .argumenty1, .argumenty2, .argumenty3 {
		width: 100%;
		padding: 1.5rem;
		font-size: 1.3rem;
    text-align: center;
		color: white;
		border: 1px solid white;
    border-radius: 1.8rem;
	}

  .argumenty1 {
		background-color: vars.$color1;
	};
	.argumenty2 {
    background-color: vars.$color2;
	};
	.argumenty3 {
    background-color: vars.$color3;
	};

	.headerBanner01 {
		background-color: rgba(255, 255, 255, 0.85);
	}

	h1,
	p {
		color: vars.$font-main-color;
	}
</style>
