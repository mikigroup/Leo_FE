<section class="py-16 bg-stone-100">
	<div class="max-w-screen-2xl mx-auto px-4">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
				Získejte plnou kontrolu nad svým byznysem
			</h2>
		</div>

		<div class="grid gap-8 mt-12 md:grid-cols-2">
			<div class="p-6 bg-white rounded-lg shadow-lg">
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Váš vlastní systém kde:</h3>
				<ul class="space-y-4">
					{#each ['Máte 100% kontrolu nad svými daty a vztahy se zákazníky',
						'Neplatíte žádné provize z objednávek - jen fixní měsíční poplatek',
						'Budujete vlastní značku místo marketplace'] as benefit}
						<li class="flex items-start">
              <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 text-green-800 bg-green-100 rounded-full">
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
							<span class="ml-3">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="p-6 bg-white rounded-lg shadow-lg">
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Srovnání nákladů</h3>
				<div class="space-y-6">
					<div class="p-4 bg-gray-50 rounded-lg">
						<p class="mb-2 font-medium">Příklad na 100 objednávek měsíčně</p>
						<p class="text-sm text-gray-600">(průměrná hodnota 300 Kč)</p>
					</div>

					<div class="flex justify-between p-4 bg-red-50 rounded-lg">
						<span>S Damejidlo:</span>
						<span class="font-semibold">9 000 Kč/měsíc</span>
						<span class="text-sm text-gray-600">(30% provize)</span>
					</div>

					<div class="flex justify-between p-4 bg-green-50 rounded-lg">
						<span>S Malým Leem:</span>
						<span class="font-semibold">999 Kč/měsíc</span>
						<span class="text-sm text-gray-600">(fixní částka)</span>
					</div>

					<div class="p-4 bg-blue-50 rounded-lg">
						<p class="font-medium">
							Váš čistý měsíční profit:
							<span class="text-lg text-green-600">+ 8 001 Kč</span>
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-8 p-6 bg-white rounded-lg shadow-lg">
			<h3 class="mb-4 text-xl font-semibold text-gray-900">V ceně získáte:</h3>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each ['Branded objednávkový web', 'Vlastní rozvoz',
					'Věrnostní program', 'Přímá komunikace se zákazníky'] as feature}
					<div class="p-4 text-center bg-gray-50 rounded-lg">
						<p>{feature}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>