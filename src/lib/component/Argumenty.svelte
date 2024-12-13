<script lang="ts">
</script>

<section class="py-20 px-5">
	<div class="max-w-screen-xl mx-auto mt-10">
		<div class="flex flex-col lg:flex-row gap-10">
			<div class="lg:w-1/3 space-y-8">
				<h2 class="text-4xl font-bold">
					Pro koho tu jsme
				</h2>
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Menší firmy hledající spolehlivý online systém</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Živnostníci, kteří chtějí automatizovat své procesy</p>
					</div>
					<div class="flex items-center gap-4">
						<div class="dot"></div>
						<p class="text-lg">Lokální podniky s potřebou vlastního řešení</p>
					</div>
				</div>
			</div>
			<div class="lg:w-2/3">
				<div class="flex flex-col md:flex-row gap-6 justify-center">
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ZÁKLADNÍ BALÍČEK <br>
							499 Kč/měsíc</h3>
						<ul>
							<li>Správa menu</li>
							<li>Online objednávkový systém</li>
							<li>Základní statistiky</li>
							<li>Email notifikace</li>
							<li>Technická podpora</li>
						</ul>
					</div>
					<div class="approach-card w-full">
						<h3 class="text-2xl font-semibold mb-2">ROZŠÍŘENÝ BALÍČEK <br>
							999 Kč/měsíc</h3>
						<ul>
							<li>Správa menu</li>
							<li>Online objednávkový systém</li>
							<li>Základní statistiky</li>
							<li>Email notifikace</li>
							<li>Prioritní podpora</li>
							<li>Automatizace</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  @use "$lib/styles/variables" as vars;

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

    h3 {
      color: vars.$button-bg-main;
    }

    p {
      color: vars.$font-main-color;
    }
  }
</style>