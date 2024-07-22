<script>
  import { onMount } from "svelte";
  import Form from "$lib/component/Form.svelte";
  import logo from "$lib/logo_leo_fe.svg";
  let isVisible = false;
  let animatedElement;

  export let data;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.disconnect();
        }
      });
    });
    // observer.observe(animatedElement);
  });
  onMount(() => {
    window.addEventListener("scroll", function () {
      var elements = document.querySelectorAll(".elementZviditelneni");
      elements.forEach((element) => {
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.style.opacity = 1;
        }
      });
    });
  });

  let cena = 899; // Počáteční cena
  onMount(() => {
    const checkbox = document.getElementById("checkboxCenik");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        cena = 0;
      } else {
        cena = 899;
      }
    });
  });
  // případně přes html : <input type="checkbox" on:change={() => cena = document.querySelector('#mojCheckbox').checked ? 0 : 899} id="mojCheckbox"/>
  
  //Ecomail - https://www.ecomail.cz
  // api connection
  /* function fetchData() {
    fetch("https://api.ecomail.cz/ecomail/lead")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } */
</script>

<section class="pt-10">
  <div class="flex flex-col gap-16 p-2 pt-16 md:p-10 md:flex-row xl:gap-28 textyPrednosti elementZviditelneni">
    <div class="flex items-center p-6 md:p-16 md:w-1/2 rounded-2xl textyPrednosti01">
      <p class="">Zjednodušte své podnikání s naším inovativním řešením. Bez ohledu na to, zda jste elektrikář nebo menší firma. Je to jen na Vás a vaší kreativitě. Malé webové řešení, které roste s Vámi.</p>
    </div>
    <div class="flex items-center p-6 md:p-16 md:w-1/2 rounded-2xl textyPrednosti02">
      <p>Leo je nástroj, který Vám poskytuje úspěšný online prodej, správu materiálu, projektové řízení, firemní
        web, blog... a bez zbytečných složitostí a cenového vypětí.</p>
    </div>
  </div>
</section>
<hr class="mx-10 my-10" />
<section class="karty">
  <h2 class="my-10 font-medium">Jak probíhá spolupráce...</h2>
  <div class="flex flex-col w-full p-5 mt-24 md:flex-row">
    <div class="flex items-end p-8 rounded-xl karta1"><p>Oslovení :)</p></div>
    <div class="flex items-end p-8 rounded-xl karta2"><p>Dodání podkladů</p></div>
    <div class="flex items-end p-8 rounded-xl karta3"><p>První ukázka a ucelení postupu</p></div>
    <div class="flex items-end p-8 rounded-xl karta4"><p>Postupný vývoj</p></div>
    <div class="flex items-end p-8 rounded-xl karta5"><p>Předání</p></div>
  </div>
</section>
<section class="pb-10 textTechnologie">
  <hr />
  <div class="flex my-10 lg:w-1/2">
    <p class="">Měníme tradiční přístup a nabízíme přímější a efektivnější způsob tvorby webových aplikací.</p>
  </div>
  <hr class="lg:hidden" />
  <div class="flex items-end justify-end my-10 lg:w-1/2 textTechnologieBanner">
    <p>"Malý Leo" je vyvíjecí se systém, postavený na nejnovějších technologiích - Svelte a DB PostgreSQL. Pravidelné zálohy a reporting.</p>
  </div>
  <hr />
</section>

<section class="cenik" id="cenik">
  <div class="flex flex-col max-w-screen-xl gap-10 border md:flex-row md:mx-auto rounded-xl cenikKarta">
    <div class="flex flex-col gap-10 md:w-1/2 levaStranaCenik">
      <div class="flex w-full">
        <h2 class="flex text-3xl font-medium">Ceník</h2>
        <!-- <div class="flex items-center justify-end w-full">
          <label class="mr-5 prepinac">
            <input type="checkbox" id="checkboxCenik">
            <span class="slider round"></span>
          </label>
          <p>Zdarma</p>
        </div> -->
      </div>
      <div class="mt-10 text-lg"><p>Výstup obdržíte <strong class="">do 48 hodin</strong> od potvrzení objednávky a dodání všech podkladů.</p></div>
      <div class="flex flex-col items-end">
        <div>
          <p class="text-2xl line-through decoration-red-500">4999 Kč</p>
        </div>
        <div>
          <p class="text-2xl">0 Kč</p>
        </div>
      </div>
      <div>
        <button class="flex justify-center w-40 gap-5 text-lg transition-transform transform bg-black tlacitkoCenik hover:text-black rounded-3xl hover:bg-slate-400 hover:scale-105">
          <span>Objednat</span>
        </button>
      </div>
    </div>
    <div class="flex items-center text-lg md:p-10 md:w-1/2 pravaStranaCenik">
      <p><strong>Získejte</strong> své vlastní webové řešení nebo e-shop s Malým Leem zcela <strong>ZDARMA!</strong> Využijte speciální zaváděcí nabídku a kontaktujte nás ještě dnes. Zeptejte se na cokoliv, společně najdeme ideální řešení pro váš byznys</p>
    </div>
  </div>
</section>

<section class="flex justify-center formBG">
  <Form {data} />
</section>

<section class="rounded-xl  newsletterKarta elementZviditelneni" id="">
  <div class="flex w-1/2 flex-col border md:flex-row rounded-xl newsletter md:mx-auto">
    <h2 class="flex items-center w-full text-3xl ">Odběr novinek</h2>
    <input class="w-full p-3 m-5 border rounded-xl" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="e-mail" data-required="true" required="" data-np-autofill-field-type="email" />
  </div>
</section>

<!-- <section>Skóre stránek, sledování a analytika. Práce s verzemi, zálohy verzí, možnost zpětné verze.</section>
<section>Vývoj probíhá na frameworku Svelte, který mění tradiční přístup a nabízí přímější a efektivnější způsob tvorby webových aplikací. Je to vynikající volba pro ty, kteří hledají moderní, inovativní a produktivní webé aplikace.</section> -->
<!-- <section>
  <p>Chcete se potkat a probrat projekt osobně?</p>
</section>

<section class="faq">
  <div></div>
</section>

<section>
  <div class={isVisible ? "animated-element visible" : "animated-element"} bind:this={animatedElement}>
    <p>Your content goes here...</p>
  </div>
</section> -->

<!-- <div>
    <p>Nasloucháme a ptáme se</p>
  </div> -->
