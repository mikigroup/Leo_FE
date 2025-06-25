<script>
	import { page } from "$app/stores";

	// https://svelte.dev/docs/kit/images
	//<enhanced:img src="./path/to/your/image.jpg" alt="An alt text" />
	// optimalizace obrazku
</script>

<header class="px-2 md:px-10">
	<section class="lg:pb-16">
		<div class="flex headerBanner" style="position:relative;">
			<div
				class="md:p-8 mx-2 xl:basis-1/2 xl:p-12 headerBanner01 mt-12 lg:mt-16 rounded-2xl">
				<h1 class="text-4xl font-bold lg:mb-6">
				Online objednávkový systém <br>
				 pro Vaše jídla
				</h1>
				<img src="/hp_meal_new.webp" alt="Online objednávkový systém pro Vaše jídla" class="meal-image" width="60%">
			</div>
			
			<!-- Nový výtrs kolem headeru -->
			<div class="header-deco header-deco--top"></div>
			<div class="header-deco header-deco--right"></div>
			<div class="header-deco header-deco--bottom"></div>
			<div class="header-deco header-deco--left"></div>
		</div>
	</section>
</header>

<style lang="scss">
	@use "$lib/styles/_mixins.scss" as mixins;
	@use "$lib/styles/_variables.scss" as vars;

	.headerBanner01 {
		
	}

	h1, h2, h3 {
		color: vars.$font-main-color;
	}

	// Nový dekorativní systém kolem headeru
	.header-deco {
		position: absolute;
		pointer-events: none;
		border-radius: 50%;
		
		&--top {
			top: -20px;
			left: 20%;
			width: 100px;
			height: 40px;
			background: linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%);
			opacity: 0.3;
			border-radius: 50px 50px 20px 20px;
		}
		
		&--right {
			top: 30%;
			right: -60px;
			width: 150px;
			height: 200px;
			background: linear-gradient(45deg, #f3e8ff 0%, #ddd6fe 50%, #c4b5fd 100%);
			opacity: 0.25;
			border-radius: 80px 20px 80px 20px;
		}
		
		&--bottom {
			bottom: -30px;
			left: 40%;
			width: 80px;
			height: 80px;
			background: linear-gradient(225deg, #dbeafe 0%, #93c5fd 100%);
			opacity: 0.2;
		}
		
		&--left {
			top: 50%;
			left: -40px;
			width: 60px;
			height: 120px;
			background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
			opacity: 0.18;
			border-radius: 30px 60px 30px 60px;
		}
	}

	@media (max-width: 1024px) {
		.header-deco {
			&--right {
				right: -30px;
				width: 100px;
				height: 150px;
			}
			&--left {
				left: -20px;
				width: 40px;
				height: 80px;
			}
		}
	}

	@media (max-width: 600px) {
		.header-deco {
			display: none;
		}
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

	// Problem section styles
	.problem-section {
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
	}

	.problem-card {
		background: white;
		padding: 2rem 1.5rem;
		border-radius: 1rem;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-5px);
		}
	}

	.problem-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.problem-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: vars.$font-main-color;
		margin-bottom: 0.75rem;
	}

	.problem-text {
		color: #6b7280;
		line-height: 1.5;
	}

	// Styly pro obrázek jídla
	.meal-image {
		border-radius: 20px;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		border: 3px solid rgba(61, 61, 61, 0.8);
		backdrop-filter: blur(10px);
		
		// Jemné vylepšení kontrastu a sytosti
		filter: contrast(1.05) saturate(1.1) brightness(1.02);
		
		&:hover {
			transform: translateY(-5px) scale(1.02);
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 30px rgba(0, 0, 0, 0.15);
		}
	}

	@media (max-width: 768px) {
		.meal-image {
			border-radius: 15px;
			border-width: 2px;
		}
	}
</style>
