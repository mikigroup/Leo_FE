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
				class="md:p-8 mx-2 xl:basis-1/2 xl:p-12 mt-12 lg:mt-16 rounded-2xl">
				<h1 class="text-4xl font-bold lg:mb-6">
				Online objednávkový systém <br>
				 pro Vaše jídla
				</h1>
				<img src="/hp_meal_new.webp" alt="Online objednávkový systém pro Vaše jídla" class="meal-image " width="60%">
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

	h1, h2, h3 {
		color: vars.$font-main-color;
	}

	// Dekorativní systém kolem headeru
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
			right: -20px;
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

	// Styly pro obrázek jídla
	.meal-image {
		border-radius: 20px;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		border: 3px solid rgba(61, 61, 61, 0.8);
		backdrop-filter: blur(10px);
		filter: contrast(1.05) saturate(1.1) brightness(1.02);		
	}

	@media (max-width: 768px) {
		.meal-image {
			border-radius: 15px;
			border-width: 2px;
		}
	}
</style>
