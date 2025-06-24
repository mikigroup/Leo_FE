<script lang="ts">
	let orderCount = 100;
	let avgOrderValue = 300;

	$: marketplaceFee = orderCount * avgOrderValue * 0.30;
	$: ourFee = 1790;
	$: savings = marketplaceFee - ourFee;
</script>

<section class="py-16 bg-gray-50">
	<div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
		<!-- Hlavní nadpis -->
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
				Váš vlastní objednávkový systém
			</h2>
			<p class="mt-2 text-xl text-gray-600">
				Bez provizí, bez závislosti na marketplace. Vaši zákazníci = vaše data
			</p>
		</div>

		<!-- Grid s výhodami -->
		<div class="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
			<div class="p-6 bg-white rounded-lg shadow-lg">
				<div class="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900">Vlastní branded web</h3>
				<p class="mt-2 text-gray-600">Objednávkový systém v designu Vašeho brandu. Budujte vlastní značku, ne cizí marketplace.</p>
			</div>

			<div class="p-6 bg-white rounded-lg shadow-lg">
				<div class="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900">Nízké fixní poplatky</h3>
				<p class="mt-2 text-gray-600">Žádné provize z obratu. Pouze fixní měsíční poplatek bez ohledu na počet objednávek.</p>
			</div>

			<div class="p-6 bg-white rounded-lg shadow-lg">
				<div class="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900">Přímý kontakt se zákazníky</h3>
				<p class="mt-2 text-gray-600">Budujte vlastní databázi zákazníků. Komunikujte přímo, bez prostředníků.</p>
			</div>
		</div>

		<!-- Kalkulačka úspor -->
		<div class="mt-16 p-8 bg-white rounded-lg shadow-lg">
			<h3 class="text-2xl font-bold text-center mb-8">Spočítejte si měsíční úsporu</h3>

			<div class="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
				<div class="space-y-4">
					<label class="block">
						<span class="text-gray-700">Počet objednávek měsíčně</span>
						<input
							type="number"
							bind:value={orderCount}
							min="1"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
						/>
					</label>

					<label class="block">
						<span class="text-gray-700">Průměrná hodnota objednávky (Kč)</span>
						<input
							type="number"
							bind:value={avgOrderValue}
							min="1"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
						/>
					</label>
				</div>

				<div class="bg-gray-50 p-6 rounded-lg	">
					<div class="space-y-4">
						<div class="flex justify-between">
							<span>Poplatky marketplace (30%)</span>
							<span class="font-bold">{marketplaceFee.toLocaleString()} Kč</span>
						</div>
						<div class="flex justify-between">
							<span>Náš měsíční poplatek</span>
							<span class="font-bold">{ourFee.toLocaleString()} Kč</span>
						</div>
						<div class="flex justify-between text-lg pt-4 border-t">
							<span class="font-bold">Vaše měsíční úspora</span>
							<span class="font-bold text-green-600">{savings.toLocaleString()} Kč</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>