<script>
  import { onMount } from "svelte";

  let isVisible = false;
  let animatedElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.disconnect();
        }
      });
    });

    observer.observe(animatedElement);
  });
</script>

<section>
  <div class="flex flex-row w-full p-10 pt-16 gap-16 xl:gap-28 textyPrednosti tems-center">
    <div class="flex items-center w-1/2 p-16 rounded-2xl textyPrednosti01">
      <p class="">Zjednodušte své podnikání s naším inovativním řešením. Bez ohledu na to, zda jste elektrikář nebo menší firma. Je to jen na Vás a vaší kreativitě. Malé webové řešení, které roste s Vámi.</p>
    </div>
    <div class="flex items-center w-1/2 p-16 rounded-2xl textyPrednosti02">
      <p>Leo je nátroj , který Vám poskytujeme úspěšný online prodej, správu materiálu, projektové řízení, firemní web, blog... a bez zbytečných složitostí a cenového vypětí.</p>
    </div>
  </div>
</section>
<hr class="mx-10 my-10" />
<section class="karty">
  <h2 class="my-10 font-medium">Jak probíhá spolupráce...</h2>
  <div class="flex w-full mt-24">
    <div class="flex items-end p-8 rounded-xl karta1"><p>Oslovení :)</p></div>
    <div class="flex items-end p-8 rounded-xl karta2"><p>Dodání podkladů</p></div>
    <div class="flex items-end p-8 rounded-xl karta3"><p>První ukázka a ucelení postupu</p></div>
    <div class="flex items-end p-8 rounded-xl karta4"><p>Postupný vývoj</p></div>
    <div class="flex items-end p-8 rounded-xl karta5"><p>Předání</p></div>
  </div>
</section>
<section class="textTechnologie">
  <div class="flex lg:w-1/2 my-10">
    <p class="">Stále se vyvíjecí systém postavený na nejnovějších technologiích - Svelte a DB PostgreSQL. Pravidelné zálohy a reporting.</p>
  </div>
  <div class="flex items-end justify-end lg:w-1/2 my-10 textTechnologieBanner">
    <p>Vše co vidíte je ručně psaný kód, žádné šablony, žádné kopie, vše je originál.</p>
  </div>
</section>
<section class="cenik">
  <div class="flex gap-10 border rounded-xl cenikKarta">
    <div class="flex flex-col w-1/2 gap-10 levaStranaCenik">
      <div class="flex w-full">
        <h2 class="flex text-3xl font-medium">Ceník</h2>
        <div class="flex items-center justify-end w-full">
          <label class="mr-5 prepinac">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>Zdarma
        </div>
      </div>
      <div class="mt-10 text-lg"><p>Výstup obdržíte <strong class="font-medium">do 48 hodin</strong> od potvrzení objednávky a dodání všech podkladů.</p></div>
      <div>899,-</div>
      <div>
        <button class="flex justify-center w-40 gap-5 text-lg transition-transform transform bg-black tlacitkoCenik hover:text-black rounded-3xl hover:bg-slate-400 hover:scale-105">
          <span>Objednat</span>
        </button>
      </div>
    </div>
    <div class="flex items-center w-1/2 pravaStranaCenik p-10">
      <p>Získat svůj vlastní eshop s Malým Leem je snadné a cenově dostupné. Podívejte se na cenové plány a najděte tu pravou možnost pro Vaše podnikání.</p>
    </div>
  </div>
</section>

<section class="newsletterKarta">
  <div class="flex border rounded-xl gap-4 newsletter">
    <h2 class="flex w-full text-3xl items-center ">Odběr novivek</h2>
    <input class="w-full border rounded-xl p-3" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="e-mail" data-required="true" required="" data-np-autofill-field-type="email" />
  </div>
</section>

<div class="">
  <div class="">
    <p>Your scrolling text goes here...</p>
  </div>
  <h1 class="animate__animated animate__bounceInLeft">An animated element</h1>
</div>
<section class="wow slideInLeft">HALLEESASDSYAD</section>
<section class="wow slideInRight">nashjdjklsdfbk\jn</section>
<section class="faq">
  <div></div>
</section>

<section>
  <div class={isVisible ? "animated-element visible" : "animated-element"} bind:this={animatedElement}>
    <p>Your content goes here...</p>
  </div>
</section>

<!-- <div>
    <p>Nasloucháme a ptáme se</p>
  </div> -->
