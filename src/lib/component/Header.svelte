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
  <nav class="flex flex-wrap items-center justify-between w-full px-4 py-4 text-lg text-gray-700 bg-white border md:py-0">
    <div>
      <a href="#"> LOGO </a>
    </div>

    <!--   <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="block w-6 h-6 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>

    <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">      
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
    </div> -->
  </nav>
  <nav class="">
    <div class="flex flex-row items-center">
      <div class="flex w-full">
        <div class="flex md:justify-start">
          <a href="/" class="flex logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Malý LEO</span>
            <img class="ml-2 rounded-full" src={logo} alt="Malý Leo" />
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <!--   <button class="flex items-center w-64 gap-5 p-5 transition-transform transform bg-black tlacitko poptavka hover:text-black hover:bg-slate-400">
          <span>Objednat poptávku</span>
          <span class="ml-2"><ArrowLongRight class="" /></span>
        </button> -->
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="block w-6 h-6 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>   
      </div>
    </div>
         <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
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
  <section>
    <div class="headerBanner">
      <div class="headerBanner01">
        <h1>Malý Leo - 1st.</h1>
        <p>Získejte konkurenční výhodu s naším webovým řešením, které se škáluje od drobných řemeslníků až po menší podniky. Postavený na nejnovějších technologiích, náš systém vyniká jednoduchým designem a flexibilitou.</p>
      </div>
    </div>
  </section>
</header>
