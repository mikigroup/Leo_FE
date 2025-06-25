<script lang="ts">
	import { textStore } from "$lib/stores/formStore";
	import { goto } from "$app/navigation";
</script>

<section class="py-20 px-5 scroll-mt-10" id="cenik">
	<div class="max-w-screen-xl mx-auto mt-10">
		<div class="flex flex-col lg:flex-row gap-10">
			<div class="lg:w-1/3 space-y-8">
				<h2 class="text-4xl font-bold">
					Pro jaké klienty tu jsme
				</h2>
				<div class="space-y-4">
          <div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Hledající moderní rychlý systému pro nabídku jídel</p>
					</div>	
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Unavené z vysokých x% marketplace provizí - <br> <span class="underline">u nás jen fixní poplatky</span></p>
					</div>	
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Hledající vlastní white-label řešení</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Se speciálními požadavky pro jídla - alergie, diety</p>            
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Chtějící vlastnit svá zákaznická data</p>
					</div>         
				</div>
			</div>
			<div class="lg:w-2/3">
				<div class="grid md:grid-cols-3 gap-6 justify-center">
					<div class="approach-card w-full">
						<div class="card-content">
							<h3 class="text-2xl font-semibold mb-2">ZÁKLADNÍ BALÍČEK <br>
								490 Kč / měsíc</h3>
							<ul>
								<li> Online objednávkový web s šablonou</li>
								<li> Správa menu (60 položek)</li>
								<li> Email notifikace majiteli i zákazníkům</li>
								<li> Základní statistiky objednávek</li>
								<li> Vlastní doména + SSL certifikát a hosting</li>
								<li> Základní technická podpora</li>                
								<li> Měsíční zálohy dat</li>
							</ul>
						</div>
						<div class="package-cta">
							<p class="trial-offer">První měsíc ZDARMA</p>
							<a href="/#form" class="package-button">Vybrat balíček</a>
						</div>
					</div>
					<div class="approach-card w-full">
						<div class="card-content">
							<h3 class="text-2xl font-semibold mb-2">ROZŠÍŘENÝ BALÍČEK <br>
								990 Kč / měsíc</h3>
							<ul>
								<li>Vše v základním balíčku</li>
								<li> Správa menu (120 položek)</li>
								<li> Pokročilá evidence alergenů a ingrediencí</li>
								<li> Dietní profily (vegan, bezlepkové)</li>								
								<li> Týdenní zálohy dat + vlastní doména</li>						
								<li> Prioritní technická podpora</li>
							</ul>
						</div>
						<div class="package-cta">
							<p class="trial-offer">První měsíc ZDARMA</p>
							<a href="/#form" class="package-button">Vybrat balíček</a>
						</div>
					</div>
					<div class="approach-card w-full premium-card">
						<div class="premium-tag">NEJOBLÍBENĚJŠÍ</div>
						<div class="card-content">
							<h3 class="text-2xl font-semibold mb-2">BUSINESS BALÍČEK <br>
								1 790 Kč / měsíc</h3>
							<ul>
								<li> Vše z Rozšířeného balíčku</li>                
								<li> Neomezený počet položek v menu</li>
								<li> Váš vlastní design</li>																					
								<li> Premium hosting a zabezpečení</li>
								<li> Denní zálohy</li>                
								<li> Věrnostní program pro zákazníky</li>
                <li> Integrace s účetním systémem <a class="hover:underline" href="https://www.fakturoid.cz/">Fakturoid</a></li>
                <li> Možnost vlastní API integrace</li>
								<li> VIP podpora</li>
							</ul>
							<div class="savings-note">
								<small><strong>Při 100 objednávkách úspora už 7 210 Kč / měsíc !</strong></small>
							</div>
						</div>
						<div class="package-cta">
							<p class="trial-offer">První měsíc ZDARMA</p>
							<a href="/#form" class="package-button premium">Vybrat balíček</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  @use "$lib/styles/variables" as vars;
  @use "sass:color";

  h2, h3, p {
    color: vars.$font-main-color;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: vars.$color3;
  }

  .approach-card {
    padding: 1.5rem;
    border-radius: 1.2rem;
    background-color: vars.$form-bg-color;
    border: 1px solid white;
    position: relative;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		height: 100%;

      &:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    h3 {
      color: vars.$button-bg-main;
    }

    p {
      color: vars.$font-main-color;
    }

    ul li {
      margin-bottom: 0.5rem;
      color: vars.$font-main-color;
    }
  }

  .premium-card {
    background-color: color.adjust(vars.$form-bg-color, $lightness: 5%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.5rem);
    border: 2px solid vars.$color3;
  }

  .premium-tag {
    position: absolute;
    top: -12px;
    right: 1rem;
    background-color: vars.$color3;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }

  .savings-note {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: color.adjust(vars.$color3, $lightness: 40%);
    border-radius: 0.5rem;
    text-align: center;
    
    small {
      color: vars.$button-bg-main;
      font-weight: 600;
    }
  }

  // Styly pro sekci možností frontendu
  .fe-options {
    h2, h3, h4 {
      color: vars.$font-main-color;
    }
  }

  .fe-option {
    padding: 2rem;
    border-radius: 1.2rem;
    background-color: white;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    
    &.highlighted {
      border: 2px dashed vars.$color3;
      position: relative;
      
      &::before {
        content: "DOPORUČUJEME";
        position: absolute;
        top: -12px;
        right: 1rem;
        background-color: vars.$color3;
        color: white;
        font-size: 0.8rem;
        font-weight: bold;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
      }
    }
  }

  .option-header {
    margin-bottom: 1.5rem;
    
    h3 {
      color: vars.$button-bg-main;
    }
  }

  .included-badge {
    background-color: color.adjust(vars.$color1, $lightness: 40%);
    color: vars.$button-bg-main;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
  }

  .price-badge {
    background-color: vars.$color3;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 700;
    display: inline-block;
  }

  .option-preview {
    margin-bottom: 1.5rem;
  }

  .preview-placeholder {
    height: 200px;
    border-radius: 0.8rem;
    overflow: hidden;
    position: relative;
    
    &.template-preview {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    &.custom-preview {
      background: linear-gradient(135deg, vars.$color1 0%, vars.$color3 100%);
    }
  }

  .preview-content {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .preview-header {
    height: 40px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    
    &.custom {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

  .preview-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .preview-item {
    height: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
    
    &.custom {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    
    li {
      padding: 0.5rem 0;
      color: vars.$font-main-color;
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: vars.$color1;
        font-weight: bold;
      }
    }
    
    &.premium li::before {
      color: vars.$color3;
    }
  }

  .cta-button {
    background-color: vars.$color3;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: color.adjust(vars.$color3, $lightness: -10%);
      transform: translateY(-1px);
    }
  }

  // Proces kroky
  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .step {
    text-align: center;
    position: relative;
    
    &:not(:last-child)::after {
      content: "→";
      position: absolute;
      right: -1rem;
      top: 50%;
      transform: translateY(-50%);
      color: vars.$color3;
      font-size: 1.5rem;
      font-weight: bold;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .step-number {
    width: 50px;
    height: 50px;
    background-color: vars.$color3;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 1rem auto;
  }

  .step h4 {
    color: vars.$button-bg-main;
    margin-bottom: 0.5rem;
  }

  .step p {
    color: vars.$font-main-color;
    font-size: 0.9rem;
  }

  // Cenové srovnání
  .price-comparison {
    h4 {
      color: vars.$button-bg-main;
    }
  }

  .comparison-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
    .label {
      font-size: 0.9rem;
      color: vars.$font-main-color;
    }
    
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: vars.$button-bg-main;
    }
    
    .note {
      font-size: 0.8rem;
      color: #6b7280;
    }
    
    &.highlighted .price {
      color: vars.$color3;
    }
  }

  .vs {
    font-size: 1.2rem;
    font-weight: bold;
    color: vars.$font-main-color;
    align-self: center;
  }

  // Card content
  .card-content {
    flex: 1;
  }

  // Package CTA styles
  .package-cta {
    text-align: center;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .trial-offer {
    font-size: 0.9rem;
    color: vars.$color1;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .package-button {
    display: inline-block;
    background-color: vars.$color1;
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: color.adjust(vars.$color1, $lightness: -10%);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    &.premium {
      background-color: vars.$color3;
      
      &:hover {
        background-color: color.adjust(vars.$color3, $lightness: -10%);
      }
    }
  }
</style>