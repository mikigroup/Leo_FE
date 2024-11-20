<script>
	import { slide } from 'svelte/transition';

	const faqItems = [
		{
			question: "Co je Malý Leo a jak mi může pomoci s podnikáním?",
			answer: "Malý Leo je moderní webové řešení postavené na technologiích Svelte a PostgreSQL, které vám poskytne rychlý, spolehlivý a designově přizpůsobitelný web pro vaše podnikání. Specializujeme se především na objednávkové systémy, které pomohou zefektivnit vaše podnikání."
		},
		{
			question: "Kolik stojí vytvoření webu s Malým Leem?",
			answer: "Aktuálně nabízíme speciální zaváděcí nabídku, kde můžete získat základní objednávkový systém ZDARMA. Tento startovací balíček obsahuje zajištění domény, SEO optimalizaci a 3 měsíce rozšířené podpory. Pro specifické požadavky a rozšířené funkce vám rádi připravíme individuální cenovou nabídku."
		},
		{
			question: "Jak dlouho trvá vytvoření webu?",
			answer: "Doba realizace závisí na rozsahu projektu a vašich požadavcích. Standardní proces zahrnuje několik fází: první kontakt a konzultace, dodání podkladů, vývoj, testování a předání. Běžně jsme schopni dodat základní web do 2-4 týdnů."
		},
		{
			question: "Jak je zajištěna bezpečnost dat?",
			answer: "Bezpečnost je naší prioritou. Systém pracuje s pravidelnými zálohami dat a využívá moderní bezpečnostní protokoly. Veškerá data jsou uchovávána na zabezpečených serverech s pravidelnou údržbou."
		},
		{
			question: "Co když potřebuji změny na webu po jeho spuštění?",
			answer:
				"Součástí startovacího balíčku je 3 měsíční rozšířená podpora, během které můžete požadovat úpravy a vylepšení. Po uplynutí této doby nabízíme různé možnosti další spolupráce a podpory."
		},
		{
			question: "Jak je web optimalizován pro vyhledávače?",
			answer: "Každý web vytvořený s Malým Leem obsahuje základní SEO optimalizaci, která zahrnuje: optimalizaci meta tagů, responzivní design, rychlé načítání stránek, správnou strukturu URL a optimalizaci pro mobilní zařízení."
		},
		{
			question: "Mohu si web spravovat sám?",
			answer: "Ano, systém je navržen tak, aby byl uživatelsky přívětivý. Poskytneme vám přístup do administrace, kde můžete upravovat obsah, produkty a další základní nastavení. Pro složitější úpravy jsme vám k dispozici."
		},
		{
			question: "Co když už mám existující doménu?",
			answer: "Není problém. Můžeme použít vaši stávající doménu a přesměrovat ji na nový web. Pomůžeme vám s celým procesem přechodu tak, aby byl bezproblémový."
		},
		{
			question: "Jak je zajištěna technická podpora?",
			answer: "Během prvních 3 měsíců máte v rámci startovacího balíčku k dispozici rozšířenou podporu, která zahrnuje: technickou pomoc, řešení případných problémů, základní úpravy a vylepšení, konzultace dalšího rozvoje."
		},
		{
			question: "Je web přizpůsoben pro mobilní zařízení?",
			answer: "Absolutně! Všechny weby vytváříme jako responzivní, což znamená, že se perfektně přizpůsobí všem zařízením - počítačům, tabletům i mobilním telefonům. Testujeme funkčnost napříč různými prohlížeči a zařízeními."
		}
	];

	// State for tracking which FAQ item is open
	let activeIndex = null;

	function toggleItem(index) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="faq-section py-20 px-5" id="faq">
	<div class="max-w-screen-xl mx-auto">
		<h2 class="text-4xl font-bold mb-10 text-white">Často kladené otázky</h2>

		<div class="faq-container">
			{#each faqItems as item, index}
				<div class="faq-item mb-4">
					<button
						class="faq-question w-full text-left p-5 flex justify-between items-center text-white hover:bg-gray-800 transition-colors duration-300"
						on:click={() => toggleItem(index)}
					>
						<span class="text-xl font-semibold">{item.question}</span>
						<span class="transform transition-transform duration-300" class:rotate-180={activeIndex === index}>
              ▼
            </span>
					</button>

					{#if activeIndex === index}
						<div class="faq-answer p-5 text-white bg-opacity-50 bg-gray-800"
								 transition:slide={{ duration: 300 }}>
							{item.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
  @use "$lib/styles/_variables.scss" as vars;

  .faq-section {
    background: linear-gradient(
                    to right,
                    vars.$button-bg-main 30%,
                    vars.$color3 80%
    );
  }

  .faq-item {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .faq-question {
    background-color: rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .faq-answer {
    line-height: 1.6;
  }
</style>