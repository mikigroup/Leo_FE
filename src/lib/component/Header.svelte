<script>
	import { page } from "$app/stores";

	// https://svelte.dev/docs/kit/images
	//<enhanced:img src="./path/to/your/image.jpg" alt="An alt text" />
	// optimalizace obrazku
</script>

<header class="px-2 md:px-10">
	<section class="lg:pb-16">
		<div class="flex headerBanner">
			<div
				class="md:p-8 mx-2 xl:basis-1/2 xl:p-12 headerBanner01 mt-12 lg:mt-16 rounded-2xl">
				<h1 class="text-4xl font-bold lg:mb-6">
					Online objednávkový systém pro Vaše jídla
				</h1>
				<div class="mt-14">
					<div class="grid md:grid-cols-3 gap-6 lg:gap-8">
						<div class="argument-card card1">
							<div class="icon-wrapper">
								<span class="icon">⚡</span>
							</div>
							<h3 class="argument-title">RYCHLOST</h3>
							<p class="argument-description">
								Objednání za pár kliků během několika sekund
							</p>
						</div>
						
						<div class="argument-card card2">
							<div class="icon-wrapper">
								<span class="icon">💰</span>
							</div>
							<h3 class="argument-title">ÚSPORA</h3>
							<p class="argument-description">
								Snížení provozních nákladů až o 30%
							</p>
						</div>
						
						<div class="argument-card card3">
							<div class="icon-wrapper">
								<span class="icon">🚀</span>
							</div>
							<h3 class="argument-title">MODERNOST</h3>
							<p class="argument-description">
								Nejnovější technologie pro váš úspěch
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</header>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

	.headerBanner01 {
		background-color: rgba(255, 255, 255, 0.85);
	}

	h1 {
		color: vars.$font-main-color;
	}

	.argument-card {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8));
		border-radius: 1.5rem;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		
		&:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 4px;
			background: linear-gradient(90deg, var(--card-color), var(--card-color-light));
		}
	}

	.card1 {
		--card-color: #{vars.$color1};
		--card-color-light: #{lighten(vars.$color1, 20%)};
	}

	.card2 {
		--card-color: #{vars.$color2};
		--card-color-light: #{lighten(vars.$color2, 20%)};
	}

	.card3 {
		--card-color: #{vars.$color3};
		--card-color-light: #{lighten(vars.$color3, 20%)};
	}

	.icon-wrapper {
		width: 60px;
		height: 60px;
		margin: 0 auto 1.5rem;
		background: linear-gradient(135deg, var(--card-color), var(--card-color-light));
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.icon {
		font-size: 1.8rem;
		filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
	}

	.argument-title {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--card-color);
		margin-bottom: 1rem;
		letter-spacing: 0.5px;
	}

	.argument-description {
		color: vars.$font-main-color;
		font-size: 1rem;
		line-height: 1.5;
		opacity: 0.9;
	}

	@media (max-width: 768px) {
		.argument-card {
			padding: 1.5rem 1rem;
		}
		
		.icon-wrapper {
			width: 50px;
			height: 50px;
		}
		
		.icon {
			font-size: 1.5rem;
		}
		
		.argument-title {
			font-size: 1.1rem;
		}
		
		.argument-description {
			font-size: 0.9rem;
		}
	}
</style>
