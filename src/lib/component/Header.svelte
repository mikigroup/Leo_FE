<script>
  import { page } from "$app/stores";
  /* import { Icon, FaceSmile } from "svelte-hero-icons"; */
  import { ArrowLongRight } from "svelte-heros-v2";
  import logo from "../logo_leo_fe.svg";
  import { slide } from "svelte/transition";

  // to je reaktivita menu, svelte :]
  let menuVisible = false;
  let scrolled = false;

  function handleScroll() {
    if (window.scrollY > 0) {
      scrolled = true;
    } else {
      scrolled = false;
    }
  }
</script>
<svelte:window on:scroll={handleScroll} />

<header class="px-2 md:px-10">
  <nav class="border-black md:border-white fixed top-0 left-0 right-0 z-50 m-2 transition-all duration-300 ease-in-out" class:bg-white={scrolled} class:shadow-md={scrolled}>
    <div class="flex flex-row items-center">
      <div class="flex w-1/3">
        <div class="flex md:justify-start">
          <a href="/" class="flex logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Malý LEO</span>
            <img class="py-2 ml-2 rounded-full w-14" src={logo} alt="Malý Leo" />
          </a>
        </div>
      </div>
      <div class="flex-col justify-end hidden w-full text-xl text-center lg:flex-row text-slate-800 md:flex">
        <div>info@malyleo.cz</div>
        <div class="lg:pl-10">+420 733 362 418</div>
      </div>
      <div class="flex justify-end w-full">
        <a href="#cenik"><button class="justify-end hidden gap-5 p-5 transition-transform transform bg-black w- md:flex tlacitko poptavka hover:text-black hover:bg-slate-400">
          <span>Objednat</span>
          <span class="ml-2"><ArrowLongRight class="" /></span>
        </button></a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" on:click={() => (menuVisible = !menuVisible)} class="block w-6 h-6 mr-5 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
    {#if menuVisible}
      <div id="menu" class="w-full mt-5 md:flex md:items-center md:w-auto" transition:slide>
        <ul class="p-10 pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
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
    {/if}
  </nav>
  <section class="pb-16">
    <div class="flex headerBanner">
      <div class="p-8 mx-2 xl:basis-1/2 xl:p-12 headerBanner01 mt-12 lg:mt-32">
  <span class="flex">
    <h1 class="text-2xl 2xl:text-3xl font-bold lg:mb-6">
      Malý Leo - Profesionální webové řešení pro váš byznys
    </h1>
    <!--<img src="/superdog.png" alt="LEO_superdog" id="superdog">-->
  </span>
        <p class="mb-5 lg:mb-10 text-xl 2xl:text-2xl leading-7">
          Hledáte moderní, rychlé a spolehlivé webové řešení? Svěřte svůj projekt do rukou odborníků. S námi získáte...
        </p>
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
              Bezpečný provoz, pravidelné zálohy a profesionální podpora
            </p>
          </li>
          <li class="pl-2">
      <span class="argumenty2 inline-block bg-green-500 text-white rounded-full px-4 py-2 mr-2 text-md 2xl:text-lg">
        Design
      </span>
            <p class="lg:mt-4 text-lg 2xl:text-xl">
              Responzivní design optimalizovaný pro všechna zařízení
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

  #superdog {
    margin-left: 1em;
    width: 2em;
    height: 2em;
    object-fit: cover; /* zachová poměr stran */
  }
</style>