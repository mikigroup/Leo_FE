<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  /* import { Icon, FaceSmile } from "svelte-hero-icons"; */
  import { ArrowLongRight } from "svelte-heros-v2";
  import logo from "../logo_leo_fe.svg";
  onMount(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });
</script>

<header>
  <nav class="border-black md:border-white ">
    <div class="flex flex-row items-center">
      <div class="flex w-full">
        <div class="flex md:justify-start">
          <a href="/" class="flex logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Malý LEO</span>
            <img class="py-2 ml-2 rounded-full w-14" src={logo} alt="Malý Leo" />
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="items-center hidden w-64 gap-5 p-5 transition-transform transform bg-black md:flex tlacitko poptavka hover:text-black hover:bg-slate-400">
          <span>Objednat poptávku</span>
          <span class="ml-2"><ArrowLongRight class="" /></span>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="block w-6 h-6 mr-5 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>   
      </div>
    </div>
         <div class="flex hidden w-full p-4 md:items-center md:w-auto" id="menu">
          <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <a class="block py-2 md:p-4 hover:text-blue-500" href="#">O nás</a>
            </li>
            <li>
              <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Služby</a>
            </li>
            <li>
              <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Nevim</a>
            </li>
            <li>
              <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Nevim</a>
            </li>
          </ul>
        </div>
  </nav>
  <section class="">
    <div class="flex headerBanner">
      <div class="p-8 mx-2 md:basis-1/3 headerBanner01">
        <h1>Malý Leo - 1st.</h1>
        <p class="">Získejte konkurenční výhodu s naším webovým řešením, které se škáluje od drobných řemeslníků až po menší podniky. Postavený na nejnovějších technologiích, náš systém vyniká jednoduchým designem a flexibilitou.</p>
      </div>
    </div>
  </section>
</header>

<style>
  
</style>
