<svelte:head>
	<title>GDPR | Malý Leo</title>
</svelte:head>

<section class="py-20 px-5 gdpr-section">
	<div class="max-w-screen-md mx-auto">
		<h2 class="text-4xl font-bold mb-10">Ochrana osobních údajů</h2>

		<div class="text-white space-y-8">
			<h3>Správce osobních údajů</h3>
			<p>Jiří Mika<br>
				Bezručova 648<br>
				Jeseník, 79001<br>				
				IČ: 01645803<br>
				info@malyleo.cz<br>				
			<div class="mb-8">
				<h3 class="text-2xl font-semibold mb-4">
					Jaké osobní údaje zpracováváme?
				</h3>
				<p class="leading-relaxed">
					Zpracováváme údaje z formuláře (jméno, příjmení,
					e-mail, telefon) a používáme základní metriku GA.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold mb-4">
					Jak dlouho uchováváme údaje a kde je používáme?
				</h3>
				<p class="leading-relaxed">
					Údaje uchováváme 2 roky pro rozesílku novinek a nejsou aktuálně nikam předáváme dalším stranám.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold mb-4">Jaká jsou vaše práva?</h3>
				<p class="leading-relaxed">
					Máte právo na přístup k údajům, jejich opravu, výmaz, omezení
					zpracování, přenositelnost, právo vznést námitku a odvolat souhlas.
					Můžete také podat stížnost u ÚOOÚ.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold mb-4">Jak jsou údaje zabezpečeny?</h3>
				<p class="leading-relaxed">
					Používáme moderní technická a organizační opatření k ochraně vašich
					údajů proti neoprávněnému přístupu nebo ztrátě. Data jsou pravidelně
					zálohována a uložena na zabezpečených serverech v rámci EU.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold mb-4">Jak odvolat souhlas?</h3>
				<p class="leading-relaxed">
					Souhlas můžete kdykoliv odvolat zasláním e-mailu na info@malyleo.cz
					Odvolání souhlasu nemá vliv na zákonnost zpracování před jeho odvoláním.
				</p>
			</div>
		</div>
    <p class="pt-20 text-white flex justify-end">Poslední aktualizace: 24.06.2025</p>
	</div>
</section>

<style lang="scss">
  @use "$lib/styles/_variables.scss" as vars;

  h2, h3 {
    color: white;
  }

	.gdpr-section {
		background: linear-gradient(
			to right,
			vars.$button-bg-main 30%,
			vars.$color3 80%
		);
	}
</style>
