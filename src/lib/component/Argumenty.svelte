<script lang="ts">
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
						<p class="text-lg">Podniky unavené z vysokých provizí</p>
					</div>	
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Vývařovny potřebující vlastní online objednávkový systém pro své zákazníky</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Firmy se speciálními požadavky (alergie, diety, eco obaly)</p>
					</div>
				</div>
			</div>
			<div class="lg:w-2/3">
				<div class="flex flex-col md:flex-row gap-6 justify-center">
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ZÁKLADNÍ BALÍČEK <br>
							490 Kč/měsíc</h3>
						<ul>
							<li>Online objednávkový systém pro zákazníky</li>
							<li>Správa položek, objednávek, textů</li>
							<li>Základní statistiky</li>
							<li>Email notifikace</li>
							<li>Technická podpora</li>
						</ul>
					</div>
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ROZŠÍŘENÝ BALÍČEK <br>
							990 Kč/měsíc</h3>
						<ul>
							<li>Vše v základním balíčku</li>
							<li>Prioritní podpora</li>
							<li>Automatizace procesů</li>
							<li>Pokročilé statistiky</li>
							<li>Možnost integrace s účetními systémy</li>							
						</ul>
					</div>
					<div class="approach-card w-full premium-card">
						<div class="premium-tag">NEJOBLÍBENĚJŠÍ</div>
						<h3 class="text-2xl font-semibold mb-2">BUSINESS BALÍČEK <br>
							1 790 Kč/měsíc</h3>
						<ul>
							<li>Vše v rozšířeném balíčku</li>
							<li>VIP podpora 24/7</li>
							<li>Kompletní administrace</li>
							<li>Platební brána</li>							
							<li>Premium hosting a zabezpečení</li>
							<li>Pravidelné zálohy dat</li>
						</ul>
					</div>
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
</style>