<!-- +page.svelte -->
<script>
    import { page } from '$app/stores';
  </script>
  
  <svelte:head>
    <title>Naše DNA | Malý Leo</title>
    <meta name="description" content="Naše hodnoty a principy, které nás vedou při vytváření objednávkového systému pro vývařovny." />
  </svelte:head>
  
  <section class="manifest-section py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Hero section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Naše DNA
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-white">
          Vaše jídlo. Vaši zákazníci. Vaše pravidla.
        </p>
      </div>
  
      <!-- Quote -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-16">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-lg text-yellow-700">
              "Jídlo je víc než živiny. Je to důvěra, kultura a lidské spojení."
            </p>
            <p class="mt-2 text-sm text-yellow-600">
              — Parafráze Massima Bottury
            </p>
          </div>
        </div>
      </div>
  
      <!-- Beliefs section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8">V čem věříme</h2>
        
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Belief 1 -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-2">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="ml-3 text-lg font-medium text-gray-900">Nezávislost je svoboda</h3>
            </div>
            <p class="mt-2 text-gray-600">
              Tržní platformy mají své místo, ale vývařovny si zaslouží vlastní digitální domov bez diktátu provizí.
            </p>
          </div>
  
          <!-- Belief 2 -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-green-500 rounded-md p-2">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 class="ml-3 text-lg font-medium text-gray-900">Každá polévka má svůj příběh</h3>
            </div>
            <p class="mt-2 text-gray-600">
              Malé vývařovny nejsou "jen" kuchyně. Jsme tu, abychom pomohli vyprávět váš příběh skrz každý talíř.
            </p>
          </div>
  
          <!-- Belief 3 -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-purple-500 rounded-md p-2">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="ml-3 text-lg font-medium text-gray-900">Poctivost se servíruje první</h3>
            </div>
            <p class="mt-2 text-gray-600">
              K zákazníkům, k lokálním surovinám, k planetě (ekobalení) i k sobě navzájem.
            </p>
          </div>
  
          <!-- Belief 4 -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-red-500 rounded-md p-2">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="ml-3 text-lg font-medium text-gray-900">Technologie má sloužit, ne komplikovat</h3>
            </div>
            <p class="mt-2 text-gray-600">
              Software musí mizet v pozadí, aby vynikl obsah - vaše chutě.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Product section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8">Produkt Malý Leo</h2>
        <p class="text-xl text-white mb-8">Proč jsme ho stvořili?</p>
  
        <div class="space-y-10">
          <!-- Feature 1 -->
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
              <h3 class="text-xl font-semibold text-white">Tam, kde velké společnosti berou až 30%, dává Malý Leo:</h3>
            </div>
            <div class="md:w-2/3 bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-green-500">✅</span>
                  <span class="ml-2 text-gray-700"><strong>Vlastní značku</strong> - Žádné generické šablony. Váš design, vaše barvy, váš příběh.</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-green-500">✅</span>
                  <span class="ml-2 text-gray-700"><strong>Plnou kontrolu nad zákazníky</strong> - Jejich alergiemi, dietami, oblíbenými obaly. <em>Vaše</em> CRM, <em>vaše</em> data.</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-green-500">✅</span>
                  <span class="ml-2 text-gray-700"><strong>Fixní cenu</strong> - Žádné provize. Jen předvídatelný měsíční poplatek.</span>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Feature 2 -->
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
              <h3 class="text-xl font-semibold text-white">Tam, kde velcí hráči ignorují specifika, řeší Malý Leo:</h3>
            </div>
            <div class="md:w-2/3 bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-yellow-500">♻️</span>
                  <span class="ml-2 text-gray-700"><strong>Ekologické obaly</strong> - Evidence na úrovni objednávky.</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-red-500">⚠️</span>
                  <span class="ml-2 text-gray-700"><strong>Alergie & diety</strong> - Není to "jen poznámka", je to bezpečnost zákazníka.</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-blue-500">⏱️</span>
                  <span class="ml-2 text-gray-700"><strong>Časové sloty</strong> - Aby jídlo čekalo čerstvé, ne zákazník ve frontě.</span>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Feature 3 -->
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
              <h3 class="text-xl font-semibold text-white">Tam, kde tradiční systémy zastarávají, exceluje Malý Leo:</h3>
            </div>
            <div class="md:w-2/3 bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-purple-500">🚀</span>
                  <span class="ml-2 text-gray-700"><strong>Moderní stack</strong> (Svelte + PostgreSQL) - Rychlost, stabilita, radost z používání.</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-green-500">📲</span>
                  <span class="ml-2 text-gray-700"><strong>Mobilní první</strong> - Od objednání po SMS notifikaci "Vaše jídlo je připraveno!".</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 text-blue-500">🔌</span>
                  <span class="ml-2 text-gray-700"><strong>API pro svobodu</strong> - Propojte nás s účetním systémem, věrnostním programem, čímkoli.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Company section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8">Firma Malý Leo</h2>
        <p class="text-xl text-white mb-8"><em>Jsme na stejné lodi</em></p>
  
        <div class="bg-gray-50 p-8 rounded-lg">
          <ul class="space-y-6">
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3">🏃‍♂️</span>
              <span class="text-gray-700"><strong>Běžíme maraton:</strong> Jsme tu pro vás dlouhodobě. Žádní investoři, žádné dotace - jen zdravý byznys.</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3">🍲</span>
              <span class="text-gray-700"><strong>Víme, co je "hladová špička":</strong> Vyrůstali jsme v gastro prostředí. Chápeme váš chaos před 12:00.</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3">🤝</span>
              <span class="text-gray-700"><strong>Podpora jako rodinná rada:</strong> Nejsme helpdesk, jsme partneři. Krizová pomoc 24/7 v Business balíčku.</span>
            </li>            
          </ul>
        </div>
      </div>
  
      <!-- Quote -->
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-16">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-lg text-blue-700">
              "Neděláme software, abychom vydělávali peníze. Vyděláváme peníze, abychom dělali lepší software pro vaše jídlo."
            </p>
            <p class="mt-2 text-sm text-blue-600">
              — Filozofie Malého Lea
            </p>
          </div>
        </div>
      </div>
  
      <!-- CTA -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-6">Kýváte hlavou?</h3>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#form" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Objednejte si demo
          </a>          
        </div>
      </div>
    </div>
  </section>

<style lang="scss">
  @use "$lib/styles/_variables.scss" as vars;

  .manifest-section {
    background: linear-gradient(
      to right,
      vars.$button-bg-main 30%,
      vars.$color3 80%
    );
  }
</style>