<script>
  import { page } from "$app/stores";

  // https://svelte.dev/docs/kit/images
  //<enhanced:img src="./path/to/your/image.jpg" alt="An alt text" />
  // optimalizace obrazku
</script>

<header class="px-2 md:px-10">
  <section class="pb-16">
    <div class="flex headerBanner">
      <div class="p-8 mx-2 xl:basis-1/2 xl:p-12 headerBanner01 mt-12 lg:mt-32 rounded-xl">
  <span class="flex">
    <h1 class="text-2xl 2xl:text-3xl font-bold lg:mb-6">
      Malý Leo - webové řešení pro váš byznys
    </h1>
  </span>
        <p class="mb-5 lg:mb-10 text-xl 2xl:text-2xl leading-7">
          Potřebujete rychlý, moderní a spolehlivý
          <br>
          Nabízíme tři hlavní benefity.
        </p>
        <p class="text-lg">Tři hlavní benefity</p>
        <div class="border border-black rounded-xl p-10">
        <ul class="list-inside flex flex-col lg:flex-row gap-5 lg:gap-5 leading-7 text-sm">
          <li class="pl-2">
      <span class="argumenty inline-block text-white rounded-full px-4 py-2 mr-2 text-md 2xl:text-lg">
        Výkon
      </span>
            <p class="lg:mt-4 text-lg 2xl:text-xl">
              Optimalizované webové aplikace s rychlým načítáním a plynulým chodem
            </p>
          </li>
          <li class="pl-2">
      <span class="argumenty1 inline-block bg-yellow-500 text-white rounded-full px-4 py-2 mr-2 text-md 2xl:text-lg">
        Spolehlivost
      </span>
            <p class="lg:mt-4 text-lg 2xl:text-xl">
              Bezpečný provoz s pravidelnými zálohami dat
            </p>
          </li>
          <li class="pl-2">
      <span class="argumenty2 inline-block bg-green-500 text-white rounded-full px-4 py-2 mr-2 text-md 2xl:text-lg">
        Design
      </span>
            <p class="lg:mt-4 text-lg 2xl:text-xl">
              Přizpůsobitelný Vašim potřebám
            </p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</header>

<style>
  .argumenty {
    background-color: #ad9e00;
  }
  .argumenty1 {
    background-color: #709900;
  }
  .argumenty2 {
    background-color: #008349;
  }
</style>