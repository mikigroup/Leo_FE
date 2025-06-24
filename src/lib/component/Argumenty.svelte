<script lang="ts">
	import { textStore } from "$lib/stores/formStore";
	import { goto } from "$app/navigation";

	const poptavatDesigner = async () => {
		$textStore = "Dobrý den, mám zájem o vlastní design na míru za 5 900 Kč. Prosím o kontaktování pro konzultaci a návrh řešení...";
		await goto("/#form");
	}
</script>

<section class="py-20 px-5" id="proKoho">
	<div class="max-w-screen-xl mx-auto mt-10">
		<div class="flex flex-col lg:flex-row gap-10">
			<div class="lg:w-1/3 space-y-8">
				<h2 class="text-4xl font-bold">
					Pro koho tu jsme
				</h2>
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Podniky unavené z vysokých marketplace provizí (až 30%)</p>
					</div>	
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Vývařovny potřebující vlastní white-label řešení</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Firmy se speciálními požadavky (alergie, diety, integrace)</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Podniky chtějící vlastnit svá zákaznická data</p>
					</div>
				</div>
			</div>
			<div class="lg:w-2/3">
				<div class="flex flex-col md:flex-row gap-6 justify-center">
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ZÁKLADNÍ BALÍČEK <br>
							490 Kč/měsíc</h3>
						<ul>
							<li> Online objednávkový web s vaším designem</li>
							<li> Správa menu (20 položek)</li>
							<li> Email notifikace majiteli i zákazníkům</li>
							<li> Základní statistiky objednávek</li>
							<li> SSL certifikát a hosting</li>
							<li> Technická podpora (pracovní dny)</li>
							<li> Měsíční zálohy dat</li>
						</ul>
					</div>
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ROZŠÍŘENÝ BALÍČEK <br>
							990 Kč/měsíc</h3>
						<ul>
							<li>Vše ze Základního balíčku</li>
							<li> Pokročilá evidence alergenů a ingrediencí</li>
							<li> Automatické dietní profily (vegan, bezlepkové)</li>
							<li> Integrace s účetními systémy (Pohoda, Money S3)</li>
							<li> Prioritní podpora (i víkendy)</li>
							<li> Neomezený počet položek v menu</li>
							<li> Týdenní zálohy dat + vlastní doména</li>						
						</ul>
					</div>
					<div class="approach-card w-full premium-card">
						<div class="premium-tag">NEJOBLÍBENĚJŠÍ</div>
						<h3 class="text-2xl font-semibold mb-2">BUSINESS BALÍČEK <br>
							1 790 Kč/měsíc</h3>
						<ul>
							<li> Vše z Rozšířeného balíčku</li>
							<li> Vlastní platební brána (úspora 30% vs marketplace)</li>
							<li> VIP podpora 24/7 - telefon i email</li>
							<li> Kompletní white-label řešení</li>							
							<li> Premium hosting a zabezpečení</li>
							<li> Denní zálohy + API integrace</li>
							<li> Věrnostní program pro zákazníky</li>
						</ul>
						<div class="savings-note">
							<small><strong>Při 100 objednávkách/měsíc úspora až 7 210 Kč!</strong></small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Nová sekce pro možnosti frontendu -->
<section class="fe-options py-16 bg-gray-50" id="design">
	<div class="max-w-screen-xl mx-auto px-4">
		<h2 class="text-center text-3xl font-bold mb-8 text-gray-900">Možnosti designu</h2>
		<p class="text-center text-xl text-gray-600 mb-12">Vyberte si, jak má vypadat váš objednávkový web</p>
		
		<div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
			<!-- Předpřipravená šablona -->
			<div class="fe-option template-option">
				<div class="option-header">
					<h3 class="text-2xl font-semibold mb-2">Předpřipravená šablona</h3>
					<p class="included-badge">Zahrnuto ve všech balíčcích</p>
				</div>
				<div class="option-preview">
					<div class="preview-placeholder template-preview">
						<div class="preview-content">
							<div class="preview-header"></div>
							<div class="preview-body">
								<div class="preview-item"></div>
								<div class="preview-item"></div>
								<div class="preview-item"></div>
							</div>
						</div>
					</div>
				</div>
				<ul class="feature-list">
					<li>Responzivní design</li>
					<li>Základní barevné schéma</li>
					<li>Optimalizace pro mobily</li>
					<li>Rychlé spuštění (1-2 dny)</li>
				</ul>
			</div>

			<!-- Custom design -->
			<div class="fe-option custom-option highlighted">
				<div class="option-header">
					<h3 class="text-2xl font-semibold mb-2">Design na míru</h3>
					<p class="price-badge">+5 900 Kč jednorázově</p>
				</div>
				<div class="option-preview">
					<div class="preview-placeholder custom-preview">
						<div class="preview-content">
							<div class="preview-header custom"></div>
							<div class="preview-body">
								<div class="preview-item custom"></div>
								<div class="preview-item custom"></div>
								<div class="preview-item custom"></div>
							</div>
						</div>
					</div>
				</div>
				<ul class="feature-list premium">
					<li>Vlastní grafický manuál</li>
					<li>Integrace fotek vaší kuchyně</li>
					<li>UX optimalizace pro vaše zákazníky</li>
					<li>Možnost dalších úprav</li>
				</ul>
				<button class="cta-button" on:click={poptavatDesigner}>Poptat designéra</button>
			</div>
		</div>

		<!-- Proces vytvoření custom FE -->
		<div class="process-section mt-16">
			<h3 class="text-2xl font-bold text-center mb-8 text-gray-900">Proces vytvoření vlastního designu</h3>
			<div class="process-steps">
				<div class="step">
					<div class="step-number">1</div>
					<h4>Konzultace potřeb</h4>
					<p>Probereme vaše představy a požadavky</p>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<h4>Návrh designu</h4>
					<p>Vytvoříme grafický návrh dle vašich potřeb</p>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<h4>Schválení</h4>
					<p>Společně doladíme finální podobu</p>
				</div>
				<div class="step">
					<div class="step-number">4</div>
					<h4>Implementace</h4>
					<p>Realizace během 2-5 pracovních dnů</p>
				</div>
			</div>
		</div>

		<!-- Cenové srovnání -->
		<div class="price-comparison mt-12 p-6 bg-white rounded-lg shadow-lg text-center">
			<h4 class="text-lg font-semibold mb-4">Cenový přehled</h4>
			<div class="flex flex-col md:flex-row gap-4 justify-center items-center">
				<div class="comparison-item">
					<span class="label">Šablona:</span>
					<span class="price">0 Kč</span>
					<span class="note">(zahrnuto v balíčku)</span>
				</div>
				<div class="vs">vs.</div>
				<div class="comparison-item highlighted">
					<span class="label">Custom design:</span>
					<span class="price">5 900 Kč</span>
					<span class="note">(jednorázově)</span>
				</div>
			</div>
		</div>
	</div>
</section>
<style lang="scss">
  @use "$lib/styles/variables" as vars;
  @use "sass:color";

  h2, p {
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
</style>